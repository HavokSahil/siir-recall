import {useEffect,useRef,useState} from 'react';
import {ReadingProgress} from '../components/reading-progress';
import {ParallelLesson} from '../components/parallel-lesson';
import {NoteContent} from '../components/note-content';
import {ExportMenu} from '../components/export-menu';
import {ArrowLeft,ArrowRight,Search,Sun,Moon,X} from 'lucide-react';
import {notes,topics, type Note} from '../lib/notes';
const subjects=topics.map(topic=>topic.title);
const descriptions=Object.fromEntries(topics.map(topic=>[topic.title,topic.description]));

export default function Home(){
 const article=useRef<HTMLDivElement>(null);
 const [selected,setSelected]=useState('overview');
 const [subject,setSubject]=useState('');
 const [query,setQuery]=useState('');
 const [theme,setTheme]=useState<'dark'|'light'>('dark');
 useEffect(()=>{
  try{const saved=localStorage.getItem('siir-theme');setTheme(saved==='light'||saved==='dark'?saved:matchMedia('(prefers-color-scheme: light)').matches?'light':'dark')}catch{}
  function navigate(){let id='overview';try{id=decodeURIComponent(location.hash.slice(1))||'overview'}catch{};setSelected(id);setQuery('');window.scrollTo({top:0})}
  navigate();window.addEventListener('hashchange',navigate);return()=>window.removeEventListener('hashchange',navigate);
 },[]);
 useEffect(()=>{document.documentElement.dataset.theme=theme},[theme]);
 function toggleTheme(){const next=theme==='dark'?'light':'dark';setTheme(next);try{localStorage.setItem('siir-theme',next)}catch{}}
 function library(){setSelected('overview');setSubject('');setQuery('');history.pushState(null,'','#overview');window.scrollTo({top:0})}
 function openCollection(name:string){setSubject(name);setQuery('');setSelected('overview');history.pushState(null,'','#overview')}
 const active=notes.find(n=>n.id===selected);
 const results=notes.filter(n=>(!subject||n.subject===subject)&&(!query||`${n.title} ${n.subject} ${n.body} ${n.mathBody||''}`.toLowerCase().includes(query.toLowerCase())));
 const sequence=active?notes.filter(n=>n.subject===active.subject):[];
 const index=sequence.findIndex(n=>n.id===selected);
 function NoteLink({note,index}:{note:Note;index:number}){return <a className="note-row" href={`#${note.id}`}><span className="number">{String(index+1).padStart(2,'0')}</span><span className="note-title">{note.title}</span><ArrowRight size={17}/></a>}
 return <div className={`wrap ${active?.mathBody?'parallel-layout':''}`}>
  <header className="site-header"><div className="header-inner"><a className="brand" href="#overview" onClick={e=>{e.preventDefault();library()}} aria-label="sIIr recall home"><img className="mark" src={`${import.meta.env.BASE_URL}siir.svg`} alt="sIIr" width="76" height="50"/><span>recall</span></a><nav aria-label="Main navigation">{(active||subject)&&<button className="text-button" onClick={library}>Library</button>}{(active||subject)&&<ExportMenu note={active} collection={active?.subject||subject} slug={active?.topicSlug||topics.find(t=>t.title===subject)?.slug}/>}<button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme==='dark'?'light':'dark'} theme`}>{theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</button></nav></div>{active&&<ReadingProgress key={active.id} content={article}/>}</header>
  {active?<main className={`reading ${active.mathBody?'parallel-reading':''}`}>
   <button className="back-link" onClick={()=>openCollection(active.subject)}><ArrowLeft size={16}/> {active.subject}</button>
   <div className="article-content" ref={article}><div className="article-heading"><span className="eyebrow">{String(index+1).padStart(2,'0')} / {sequence.length} · {Math.max(1,Math.ceil(`${active.body} ${active.mathBody||''}`.split(/\s+/).length/180))} MIN READ</span><h1>{active.title}</h1>{active.summary&&<p className="dek">{active.summary}</p>}</div>
   {active.mathBody?<ParallelLesson key={active.id} note={active}/>:<NoteContent note={active}/>}</div>
   <nav className="article-pagination" aria-label="Lesson navigation">{index>0?<a href={`#${sequence[index-1].id}`}><ArrowLeft size={16}/> Previous</a>:<button onClick={()=>openCollection(active.subject)}>Back to collection</button>}{index<sequence.length-1&&<a href={`#${sequence[index+1].id}`}>Next lesson <ArrowRight size={16}/></a>}</nav>
  </main>:<main className="library">
   {subject&&<button className="back-link" onClick={library}><ArrowLeft size={16}/> All collections</button>}
   <div className="library-heading"><span className="eyebrow">{subject?`${results.length} NOTES`:'A SIIRSUITE PROJECT'}</span><h1>{subject||'Keep the reasoning.'}</h1><p>{subject?descriptions[subject]:'Notes on mathematics, music, and the ideas worth returning to.'}</p></div>
   <label className="search"><Search size={18}/><input aria-label="Search notes" placeholder="Search notes…" value={query} onChange={e=>setQuery(e.target.value)}/>{query&&<button aria-label="Clear search" onClick={()=>setQuery('')}><X size={16}/></button>}</label>
   {!subject&&!query?<section className="collections" aria-label="Collections">{subjects.map((name,i)=><button className="collection" key={name} onClick={()=>openCollection(name)}><span className="collection-meta">0{i+1} / {notes.filter(n=>n.subject===name).length} notes</span><h2>{name}</h2><p>{descriptions[name]}</p><span className="collection-action">Explore collection <ArrowRight size={18}/></span></button>)}</section>:<section className="note-list" aria-label={query?'Search results':'Collection notes'}>{query&&<p className="result-count">{results.length} matching notes</p>}{results.length?results.map((n,i)=><NoteLink key={n.id} note={n} index={i}/>):<p className="empty">No matching notes. Try a shorter phrase.</p>}</section>}
  </main>}
  <footer className="footer"><span>sIIr recall</span><span>A Siirsuite project · Sahil Raj</span></footer>
 </div>
}
