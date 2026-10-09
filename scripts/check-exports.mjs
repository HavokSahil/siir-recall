import {readFile,access} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {readContent} from './read-content.mjs';
process.chdir(fileURLToPath(new URL('../',import.meta.url)));
try{
 const {notes,topics,sourceSha256}=await readContent();
 const manifest=JSON.parse(await readFile('public/exports/manifest.json','utf8'));
 if(manifest.sourceSha256!==sourceSha256)throw Error('Notes changed');
 
 const files=[...notes.flatMap(n=>[`${n.id}.pdf`,`${n.id}.md`]),...topics.flatMap(t=>[`${t.slug}.pdf`,`${t.slug}.md`,`${t.slug}-pdf.zip`,`${t.slug}-markdown.zip`])];
 await Promise.all(files.map(file=>access(`public/exports/${file}`)));
 console.log(`Checked ${files.length} static export files.`);
}catch(error){throw Error('Exports are missing or out of date. Run npm run exports:generate before building.',{cause:error})}
