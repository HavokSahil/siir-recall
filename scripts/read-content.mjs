import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {readTopicFiles} from '../lib/content.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
export async function readContent(){
 const files={};
 async function walk(path){
  for(const entry of await readdir(root+path,{withFileTypes:true})){
   const relative=`${path}/${entry.name}`;
   if(entry.isDirectory())await walk(relative);
   else if(entry.name.endsWith('.md'))files[relative]=await readFile(root+relative,'utf8');
  }
 }
 await walk('topics');
 const sourceHash=createHash('sha256');
 for(const path of Object.keys(files).sort())sourceHash.update(path+'\0').update(files[path]+'\0');
 return {...readTopicFiles(files),files,sourceSha256:sourceHash.digest('hex')};
}
