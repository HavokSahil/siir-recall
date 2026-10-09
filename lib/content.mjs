/** @param {string} raw */
export function parseMarkdown(raw){
 const normalized=raw.replace(/\r\n/g,'\n');
 const match=normalized.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
 /** @type {Record<string,string>} */
 const metadata={};
 if(match)for(const line of match[1].split('\n')){
  const field=line.match(/^([a-z_]+):\s*(.*)$/);if(!field)continue;
  let value=field[2].trim();
  if(value.startsWith('"')){try{value=JSON.parse(value)}catch{throw Error(`Invalid quoted metadata: ${line}`)}}
  else if(value.startsWith("'")&&value.endsWith("'"))value=value.slice(1,-1).replace(/''/g,"'");
  metadata[field[1]]=value;
 }
 const body=(match?normalized.slice(match[0].length):normalized).trim();
 const heading=body.match(/^#\s+(.+)$/m);
 return {metadata,title:metadata.title||heading?.[1]?.replace(/^\d+\s*·\s*/,''),body:heading?body.replace(heading[0],'').trim()+'\n':body+'\n'};
}
/**
 * @param {Record<string,string>} files
 * @returns {{notes:import('./notes').Note[],topics:import('./notes').Topic[]}}
 */
export function readTopicFiles(files){
 /** @type {Record<string,string>} */
 const source={};
 for(const [path,body] of Object.entries(files))source[path.replace(/^.*?topics\//,'topics/')]=body;
 const topicPaths=Object.keys(source).filter(path=>/^topics\/[^/]+\/topic\.md$/.test(path)).sort();
 const topics=topicPaths.map(path=>{
  const slug=path.split('/')[1],parsed=parseMarkdown(source[path]);
  if(!parsed.title)throw Error(`Add a # title in ${path}`);
  return {slug,title:parsed.title,description:parsed.metadata.description||parsed.body.trim().split(/\n\s*\n/)[0]||'',order:Number(parsed.metadata.order)||100};
 }).sort((a,b)=>a.order-b.order||a.slug.localeCompare(b.slug));
 if(new Set(topics.map(t=>t.title)).size!==topics.length)throw Error('Each topic needs a unique title');
 /** @type {import('./notes').Note[]} */
 const notes=[];
 for(const topic of topics){
  const prefix=`topics/${topic.slug}/lessons/`;
  const lessons=Object.keys(source).filter(path=>path.startsWith(prefix)&&/^\d+[^/]*\/explanation\.md$/.test(path.slice(prefix.length))).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
  for(const path of lessons){
   const parsed=parseMarkdown(source[path]),directory=path.slice(prefix.length).split('/')[0],position=Number(directory.match(/^\d+/)?.[0]);
   if(!parsed.title)throw Error(`Add a # lesson title in ${path}`);
   const id=parsed.metadata.lesson_id||`${topic.slug}-${directory}`;
   if(!/^[a-zA-Z0-9-]+$/.test(id)||notes.some(note=>note.id===id))throw Error(`Invalid or duplicate lesson_id in ${path}: ${id}`);
   const mathPath=path.replace(/explanation\.md$/,'math.md');
   const math=source[mathPath]===undefined?undefined:parseMarkdown(source[mathPath]);
   if(math&&(math.title!==parsed.title||(math.metadata.lesson_id&&math.metadata.lesson_id!==id)))throw Error(`Maths and explanation must have the same title and lesson_id: ${path}`);
   notes.push({id,title:parsed.title,subject:topic.title,topicSlug:topic.slug,directory,body:parsed.body,...(math?{mathBody:math.body}:{}),summary:parsed.metadata.summary,position,updatedAt:parsed.metadata.updated_at||''});
  }
 }
 return {notes,topics};
}
