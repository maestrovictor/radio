// RecREdA: smoke tests sin dependencias externas. Ejecutar: node RecREdA/tests/smoke.test.js
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const html=fs.readFileSync(path.resolve(__dirname,'../index.html'),'utf8');
const match=html.match(/<script>([\s\S]*?)<\/script>/);
assert.ok(match,'script de la aplicación');
const js=match[1];
new Function(js);
for(const id of ['pads-effects','pads-music','mic-enable','mic-mute','record','stop-record','download-wav','download','playback','script','log-list']){
  assert.ok(html.includes('id="'+id+'"'),'Falta el elemento '+id);
}
assert.match(html,/prefers-reduced-motion/,'Respeta movimiento reducido');
assert.match(html,/download-actions/,'Controles de descarga distintos');
const start=js.indexOf('function wavFromAudioBuffer(');
const end=js.indexOf("$('download-wav').addEventListener",start);
assert.ok(start>=0 && end>start,'Codificador WAV incluido');
let saved=null;
class FakeBlob{
 constructor(parts,options){saved={parts,options};this.type=options.type}
}
const encode=new Function('Blob',js.slice(start,end)+'\nreturn wavFromAudioBuffer;')(FakeBlob);
const left=new Float32Array([-1,1,0]),right=new Float32Array([0,.5,-.5]);
const audio={
 numberOfChannels:2,
 sampleRate:48000,
 length:3,
 getChannelData(i){return [left,right][i]}
};
const blob=encode(audio);
assert.equal(blob.type,'audio/wav');
const buffer=saved.parts[0];
const view=new DataView(buffer);
const ascii=(n,len)=>Array.from({length:len},(_,i)=>String.fromCharCode(view.getUint8(n+i))).join('');
assert.equal(ascii(0,4),'RIFF');
assert.equal(ascii(8,4),'WAVE');
assert.equal(ascii(12,4),'fmt ');
assert.equal(ascii(36,4),'data');
assert.equal(view.getUint16(20,true),1,'PCM sin compresión');
assert.equal(view.getUint16(22,true),2,'estéreo');
assert.equal(view.getUint32(24,true),48000,'48 kHz');
assert.equal(view.getUint16(34,true),16,'16 bits');
assert.equal(view.getUint32(40,true),12,'3 fotogramas x 2 canales x 2 bytes');
assert.equal(buffer.byteLength,56);
assert.equal(view.getInt16(44,true),-32768);
assert.equal(view.getInt16(46,true),0);
assert.equal(view.getInt16(48,true),32767);
assert.ok(view.getInt16(50,true)>16000);
console.log('OK RecREdA: JavaScript, elementos de UI, WAV RIFF/PCM 16-bit y muestras intercaladas');
