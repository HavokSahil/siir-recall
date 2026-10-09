import {useRef,useState} from 'react';
import type {Note} from '../lib/notes';
import {parallelSections} from '../lib/parallel-sections';
import {Markdown} from './note-content';

type Pane='explanation'|'math';
export function ParallelLesson({note}:{note:Note}){
 const [pane,setPane]=useState<Pane>('explanation');
 const container=useRef<HTMLDivElement>(null);
 const sections=parallelSections(note);
 function switchPane(next:Pane){
  if(next===pane)return;
  // Remember the section, not a scroll percentage: the two texts differ in length.
  const rows=Array.from(container.current?.querySelectorAll<HTMLElement>('.parallel-section')||[]);
  const visibleTop=(document.querySelector('.site-header')?.getBoundingClientRect().bottom||0)+(container.current?.querySelector<HTMLElement>('.pane-switch')?.offsetHeight||0);
  const current=rows.find(row=>row.getBoundingClientRect().bottom>visibleTop);
  const offset=current?.getBoundingClientRect().top;
  setPane(next);
  requestAnimationFrame(()=>{if(current&&offset!==undefined)window.scrollBy({top:current.getBoundingClientRect().top-offset,behavior:'instant'})});
 }
 return <div className={`parallel-reader showing-${pane}`} ref={container}>
  <div className="pane-switch" role="group" aria-label="Reading pane">
   <button type="button" aria-pressed={pane==='explanation'} onClick={()=>switchPane('explanation')}>Explanation</button>
   <button type="button" aria-pressed={pane==='math'} onClick={()=>switchPane('math')}>Maths</button>
  </div>
  <div className="pane-headings" aria-hidden="true"><span>Maths</span><span>Explanation</span></div>
  {sections.map(section=><section className="parallel-section" id={`section-${section.id}`} key={section.id}>
   <h2 className="parallel-title"><span>{section.id}</span>{section.title}</h2>
   <div className="parallel-row">
    <div className="parallel-pane math-pane" role="region" aria-label={`${section.id} Maths`}><Markdown body={section.math}/></div>
    <div className="parallel-pane explanation-pane" role="region" aria-label={`${section.id} Explanation`}><Markdown body={section.explanation}/></div>
   </div>
  </section>)}
 </div>
}
