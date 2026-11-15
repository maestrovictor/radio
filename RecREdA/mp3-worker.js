/* RecREdA: codificación MP3 en un Worker local con lamejs.
   La grabación no se envía a ningún servidor durante la conversión. */
'use strict';
importScripts('./vendor/lame.min.js');

self.onmessage = function(event){
  const msg=event.data;
  if(!msg || msg.action!=='encode')return;
  try{
    const left=new Float32Array(msg.left);
    const right=msg.channels===2?new Float32Array(msg.right):null;
    const rate=msg.sampleRate;
    const channels=right?2:1;
    const bitrate=Math.min(320,Math.max(64,Number(msg.bitrate)||128));
    const encoder=new lamejs.Mp3Encoder(channels,rate,bitrate);
    const frameSize=1152,parts=[];
    function asPCM(channel,start,end){
      const out=new Int16Array(end-start);
      for(let j=start;j<end;j++){
        const s=Math.max(-1,Math.min(1,channel[j]));
        out[j-start]=s<0?Math.round(s*32768):Math.round(s*32767);
      }
      return out;
    }
    const total=Math.max(1,Math.ceil(left.length/frameSize));
    for(let i=0;i<total;i++){
      const start=i*frameSize,end=Math.min(left.length,start+frameSize);
      const a=asPCM(left,start,end),b=right?asPCM(right,start,end):null;
      const bytes=channels===2?encoder.encodeBuffer(a,b):encoder.encodeBuffer(a);
      if(bytes.length)parts.push(new Uint8Array(bytes));
      if(i%140===0)self.postMessage({action:'progress',value:Math.round(i/total*100)});
    }
    const tail=encoder.flush();
    if(tail.length)parts.push(new Uint8Array(tail));
    self.postMessage({action:'done',blob:new Blob(parts,{type:'audio/mpeg'})});
  }catch(err){self.postMessage({action:'error',message:err?.message||String(err)})}
};
