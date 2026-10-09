import type {Note} from './notes';
export type ParallelSection={id:string;title:string;explanation:string;math:string};
function sections(body:string){
 const headings=[...body.matchAll(/^##[ \t]+(.+)$/gm)];
 const intro=body.slice(0,headings[0]?.index??body.length).trim();
 const items=headings.map((heading,i)=>{
  const labeled=heading[1].match(/^(\d+(?:\.\d+)+)\s*·\s*(.+)$/);
  const title=labeled?.[2]||heading[1];
  return {id:labeled?.[1]||title.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,'-'),title,body:body.slice(heading.index!+heading[0].length,headings[i+1]?.index??body.length).trim()};
 });
 return {intro,items};
}
export function parallelSections(note:Note):ParallelSection[]{
 if(!note.mathBody)return [];
 const explanation=sections(note.body),math=sections(note.mathBody);
 if(explanation.items.length!==math.items.length||explanation.items.some((s,i)=>s.id!==math.items[i].id||s.title!==math.items[i].title))throw Error(`Use the same ## section headings in both panes of ${note.id}`);
 if(new Set(explanation.items.map(s=>s.id)).size!==explanation.items.length)throw Error(`Use unique section IDs or headings in ${note.id}`);
 const pairs=explanation.items.map((s,i)=>({id:s.id,title:s.title,explanation:s.body,math:math.items[i].body}));
 if(explanation.intro||math.intro)pairs.unshift({id:'overview',title:'Overview',explanation:explanation.intro,math:math.intro});
 return pairs;
}
