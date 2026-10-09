import {deflateRawSync} from 'node:zlib';

export function slug(text){return text.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
export function markdown(note){
 let extra='';
 if(!note.mathBody&&note.id==='qec-06')extra='## Guaranteed correction of arbitrary qubit errors\n\n| Distance d | 3 | 5 | 7 | 9 |\n| --- | --- | --- | --- | --- |\n| Correctable t | 1 | 2 | 3 | 4 |\n\n';
 if(!note.mathBody&&note.id==='qec-08')extra='> Diagram: a three-edge Z-error chain. Its two outer endpoints are syndrome defects; its interior vertices have even incidence.\n\n';
 return `# ${note.title}\n\n*${note.subject} · sIIr recall*\n\n${note.summary?`${note.summary}\n\n`:''}${extra}${note.mathBody?`## Explanation\n\n${note.body.trim()}\n\n## Maths\n\n${note.mathBody.trim()}`:note.body.trim()}\n`;
}
// ZIP format: UTF-8 filenames, raw DEFLATE data, CRC-32, and central directory.
const crcTable=Array.from({length:256},(_,n)=>{for(let i=0;i<8;i++)n=(n&1)?0xedb88320^(n>>>1):n>>>1;return n>>>0});
function crc32(data){let value=0xffffffff;for(const byte of data)value=crcTable[(value^byte)&255]^(value>>>8);return (value^0xffffffff)>>>0}
export function zip(entries){
 const chunks=[],directory=[];let offset=0;
 for(const [filename,input] of entries){
  const name=Buffer.from(filename),data=Buffer.from(input),compressed=deflateRawSync(data),crc=crc32(data);
  const header=Buffer.alloc(30);header.writeUInt32LE(0x04034b50);header.writeUInt16LE(20,4);header.writeUInt16LE(0x800,6);header.writeUInt16LE(8,8);header.writeUInt16LE(33,12);header.writeUInt32LE(crc,14);header.writeUInt32LE(compressed.length,18);header.writeUInt32LE(data.length,22);header.writeUInt16LE(name.length,26);
  const central=Buffer.alloc(46);central.writeUInt32LE(0x02014b50);central.writeUInt16LE(20,4);central.writeUInt16LE(20,6);central.writeUInt16LE(0x800,8);central.writeUInt16LE(8,10);central.writeUInt16LE(33,14);central.writeUInt32LE(crc,16);central.writeUInt32LE(compressed.length,20);central.writeUInt32LE(data.length,24);central.writeUInt16LE(name.length,28);central.writeUInt32LE(offset,42);
  chunks.push(header,name,compressed);directory.push(central,name);offset+=header.length+name.length+compressed.length;
 }
 const central=Buffer.concat(directory),end=Buffer.alloc(22);end.writeUInt32LE(0x06054b50);end.writeUInt16LE(entries.length,8);end.writeUInt16LE(entries.length,10);end.writeUInt32LE(central.length,12);end.writeUInt32LE(offset,16);
 return Buffer.concat([...chunks,central,end]);
}
