// Run: node RecREdA/tests/mp3.test.js
// No network access, no external npm dependencies.
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const app=path.resolve(__dirname,'..');
const library=fs.readFileSync(path.join(app,'vendor/lame.min.js'),'utf8');
const worker=fs.readFileSync(path.join(app,'mp3-worker.js'),'utf8');
const config=fs.readFileSync(path.join(app,'config.js'),'utf8');
const page=fs.readFileSync(path.join(app,'index.html'),'utf8');
assert.match(page,/id="download-mp3"/);
assert.match(page,/id="drive-mp3"/);
assert.match(page,/https:\/\/www.googleapis.com\/upload\/drive\/v3\/files\?uploadType=resumable/);
assert.match(page,/https:\/\/www.googleapis.com\/auth\/drive.file/);
assert.match(page,/downloadBlob\(blob,mp3Filename\(\)\)/);
assert.match(config,/RECREDA_GOOGLE_CLIENT_ID/);
new Function(page.match(/<script>([\s\S]*?)<\/script>/)[1]);
const messages=[];
const context={
  Float32Array,Int16Array,Int32Array,Uint8Array,Uint32Array,ArrayBuffer,
  Math,Number,Error,Blob,
  console:{log(){}},
  self:{postMessage:m=>messages.push(m)},
  importScripts:()=>{},
};
vm.createContext(context);
vm.runInContext(library,context,{timeout:10000});
vm.runInContext(worker,context,{timeout:10000});
assert.equal(typeof context.self.onmessage,'function');
const pcm=new Float32Array(44100);
for(let i=0;i<pcm.length;i++)pcm[i]=Math.sin(2*Math.PI*440*i/44100)*.2;
context.self.onmessage({data:{action:'encode',sampleRate:44100,channels:1,bitrate:128,left:pcm.buffer}});
const error=messages.find(x=>x.action==='error');
assert.equal(error,undefined,error?.message);
const done=messages.find(x=>x.action==='done');
assert.ok(done,'Debe entregar archivo MP3');
assert.equal(done.blob.type,'audio/mpeg');
assert.ok(done.blob.size>1000,'Debe contener datos de audio codificado');
console.log('OK: codificador MP3 real, interfaz descargar/Drive y sintaxis');
