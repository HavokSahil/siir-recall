import {build} from 'vite';
import {readFile,writeFile,mkdir,access,rm} from 'node:fs/promises';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {resolve,dirname} from 'node:path';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {slug,markdown,zip} from './export-utils.mjs';
import {katexCssPath} from './math-css.mjs';
import {readContent} from './read-content.mjs';
const run=promisify(execFile);
const root=fileURLToPath(new URL('../',import.meta.url));
process.chdir(root);
const {notes,topics,files,sourceSha256}=await readContent();
const subjects=topics.map(topic=>topic.title);
const force=process.argv.includes('--force');
async function unchanged(name,content){try{return !force&&(await readFile(resolve(output,`${name}.md`),'utf8'))===content&&(await readFile(resolve(output,`${name}.pdf`))).subarray(0,5).equals(Buffer.from('%PDF-'))}catch{return false}}
const temp=resolve('.sites-runtime/export-build');
const output=resolve('public/exports');
const candidates=[process.env.CHROME_PATH,'/usr/bin/chromium','/usr/bin/chromium-browser','/usr/bin/google-chrome','/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',process.env.PROGRAMFILES&&`${process.env.PROGRAMFILES}/Google/Chrome/Application/chrome.exe`].filter(Boolean);
let chrome;
for(const candidate of candidates){try{await access(candidate);chrome=candidate;break}catch{}}
if(!chrome&&!process.env.PDF_RENDERER)throw Error('Chrome or Chromium is required to regenerate PDFs. Set CHROME_PATH to its executable.');
await mkdir(temp,{recursive:true});
await mkdir(output,{recursive:true});
await build({configFile:false,logLevel:'error',build:{ssr:'scripts/export-document.tsx',outDir:temp,emptyOutDir:false,rollupOptions:{output:{entryFileNames:'renderer.mjs'}}}});
const {renderNotes}=await import(pathToFileURL(resolve(temp,'renderer.mjs')).href);
let katex=await readFile(katexCssPath,'utf8');
const fontUrls=[...new Set([...katex.matchAll(/url\(([^)]+)\)/g)].map(m=>m[1]))];
for(const url of fontUrls){const bytes=await readFile(resolve(dirname(katexCssPath),url));const mime=url.endsWith('.woff2')?'font/woff2':url.endsWith('.woff')?'font/woff':'font/ttf';katex=katex.split(`url(${url})`).join(`url(data:${mime};base64,${bytes.toString('base64')})`)}
const zain=(await readFile('public/fonts/Zain-Regular.ttf')).toString('base64');
const heading=(await readFile('public/fonts/ElMessiri-Regular.ttf')).toString('base64');
const css=`@font-face{font-family:Zain;src:url(data:font/ttf;base64,${zain})}@font-face{font-family:ElMessiri;src:url(data:font/ttf;base64,${heading})}
@page{size:A4;margin:18mm 18mm 20mm}*{box-sizing:border-box}body{margin:0;color:#222;background:white;font:14pt/1.4 Zain,sans-serif}h1,h2,h3{break-after:avoid}h1,h2{font-family:ElMessiri,serif;font-weight:400;line-height:1.25}h1{font-size:27pt;margin:12px 0 15px}h2{font-size:19pt;margin:25px 0 12px}h3{font-size:16pt;margin:20px 0 10px}p{margin:0 0 12px}li{margin-bottom:5px}a{color:#333;text-decoration:underline}header{border-bottom:1px solid #ddd;padding-bottom:18px;margin-bottom:22px}.brand{font:10pt Zain,sans-serif;letter-spacing:.07em;color:#666}.summary{font-size:15pt;color:#666;margin-bottom:0}article+article{break-before:page}.cover{break-after:page}.cover h1{margin-top:34px}.cover ol{padding-left:20px;margin-top:32px}blockquote{border-left:2px solid #aaa;margin:18px 0;padding:10px 15px;background:#f5f5f5}blockquote p{margin:0}.katex-mathml{display:none!important}.katex{font-size:1em}.katex-display{margin:16px 0;font-size:.80em;break-inside:avoid}.katex-display .katex-html{white-space:normal}.export-pair h3{font:11pt Zain,sans-serif;color:#666;text-transform:uppercase;letter-spacing:.08em;margin:15px 0 10px}pre{font:9pt/1.5 monospace;white-space:pre-wrap;overflow-wrap:anywhere;background:#f5f5f5;padding:12px;border-radius:8px}code{font-size:.8em}table{border-collapse:collapse;width:100%;font-size:12pt;break-inside:avoid}th,td{padding:8px;border-bottom:1px solid #ddd;text-align:left}caption{font-size:11pt;text-align:left;padding-bottom:10px}.chain{margin:18px 0;break-inside:avoid}.chain svg{width:100%;height:auto}.chain figcaption{font-size:11pt;color:#666;text-align:center}.distance-table{margin-bottom:20px}img{max-width:100%}`;
async function pdf(name,items,collection){
 const html=resolve(temp,`${name}.html`),destination=resolve(temp,`${name}.pdf`);
 await writeFile(html,`<!doctype html><html><head><meta charset="UTF-8"><title>sIIr recall</title><style>${katex}\n${css}</style></head><body>${renderNotes(items,collection)}</body></html>`);
 if(process.env.PDF_RENDERER){await run(process.env.PDF_RENDERER,[html,destination],{timeout:60000,maxBuffer:2*1024*1024})}else{
 await run(chrome,['--headless','--no-sandbox','--disable-gpu','--disable-dev-shm-usage','--no-pdf-header-footer','--no-first-run','--no-default-browser-check',`--user-data-dir=${resolve(temp,'chrome-profile')}`,'--virtual-time-budget=2500',`--print-to-pdf=${destination}`,pathToFileURL(html).href],{timeout:60000,maxBuffer:2*1024*1024});
 }
 const bytes=await readFile(destination);if(!bytes.subarray(0,5).equals(Buffer.from('%PDF-')))throw Error(`Invalid PDF: ${name}`);
 await writeFile(resolve(output,`${name}.pdf`),bytes);
 console.log(`Exported ${name}.pdf`);
 return bytes;
}
try{
 const pdfs=new Map();
 for(const note of notes){
  const text=markdown(note),reuse=await unchanged(note.id,text);
  pdfs.set(note.id,reuse?await readFile(resolve(output,`${note.id}.pdf`)):await pdf(note.id,[note]));
  await writeFile(resolve(output,`${note.id}.md`),text);
 }
 for(const subject of subjects){
  const items=notes.filter(n=>n.subject===subject),topic=topics.find(t=>t.title===subject),name=topic.slug;
  const text=`# ${subject}\n\n*sIIr recall · ${items.length} notes*\n\n${items.map(n=>markdown(n)).join('\n---\n\n')}`;
  if(!await unchanged(name,text))await pdf(name,items,subject);
  await writeFile(resolve(output,`${name}.md`),text);
  await writeFile(resolve(output,`${name}-pdf.zip`),zip(items.map((n,i)=>[`${String(i+1).padStart(2,'0')}-${n.id}.pdf`,pdfs.get(n.id)])));
  const prefix=`topics/${topic.slug}/`;
  const sourceFiles=Object.entries(files).filter(([path])=>path.startsWith(prefix)).map(([path,body])=>[path.slice(prefix.length),body]);
  await writeFile(resolve(output,`${name}-markdown.zip`),zip(sourceFiles));
 }
 await writeFile(resolve(output,'manifest.json'),JSON.stringify({sourceSha256,notes:notes.length,collections:subjects.length},null,2)+'\n');
 console.log('All PDF, Markdown, and ZIP exports are ready.');
}finally{await rm(temp,{recursive:true,force:true})}
