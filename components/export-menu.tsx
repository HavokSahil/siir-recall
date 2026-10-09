import {useEffect,useRef} from 'react';
import {Download} from 'lucide-react';
import type {Note} from '../lib/notes';
import {collectionSlug,exportPath} from '../lib/export-paths';

export function ExportMenu({note,collection,slug:topicSlug}:{note?:Note;collection:string;slug?:string}){
 const menu=useRef<HTMLDetailsElement>(null);
 const slug=topicSlug||collectionSlug(collection);
 useEffect(()=>{
  const close=(event:PointerEvent)=>{if(!menu.current?.contains(event.target as Node))menu.current?.removeAttribute('open')};
  const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'&&menu.current?.open){menu.current?.removeAttribute('open');menu.current?.querySelector('summary')?.focus()}};
  document.addEventListener('pointerdown',close);document.addEventListener('keydown',escape);
  return()=>{document.removeEventListener('pointerdown',close);document.removeEventListener('keydown',escape)};
 },[]);
 useEffect(()=>{menu.current?.removeAttribute('open')},[note?.id,collection]);
 function link(name:string,extension:string,label:string){return <a href={exportPath(name,extension)} download onClick={()=>menu.current?.removeAttribute('open')}>{label}</a>}
 return <details className="export-menu" ref={menu}><summary><Download size={17}/><span>Export</span></summary><div className="export-options">
  {note&&<section aria-label="Export current note"><span className="export-label">This note</span>{link(note.id,'pdf','PDF')}{link(note.id,'md','Markdown')}</section>}
  <section aria-label="Export collection"><span className="export-label">Collection · {collection}</span>{link(slug,'pdf','PDF · combined')}{link(`${slug}-pdf`,'zip','PDF ZIP · separate notes')}{link(slug,'md','Markdown · combined')}{link(`${slug}-markdown`,'zip','Markdown ZIP · separate notes')}</section>
 </div></details>
}
