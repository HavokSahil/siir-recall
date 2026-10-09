import {renderToStaticMarkup} from 'react-dom/server';
import {NoteContent} from '../components/note-content';
import type {Note} from '../lib/notes';

export function renderNotes(notes:Note[],collection?:string){
 return renderToStaticMarkup(<main>
  {collection&&<section className="cover"><div className="brand">sIIr recall</div><h1>{collection}</h1><p>{notes.length} notes · Siirsuite</p><ol>{notes.map(n=><li key={n.id}>{n.title}</li>)}</ol></section>}
  {notes.map(n=><article key={n.id}><header><div className="brand">sIIr recall / {n.subject}</div><h1>{n.title}</h1>{n.summary&&<p className="summary">{n.summary}</p>}</header><NoteContent note={n}/></article>)}
 </main>);
}
