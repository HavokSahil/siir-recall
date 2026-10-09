import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import {remarkTables} from '../lib/remark-tables';
import rehypeKatex from 'rehype-katex';
import {parallelSections} from '../lib/parallel-sections';
import type {Note} from '../lib/notes';
export function Markdown({body}:{body:string}){return <div className="prose"><ReactMarkdown remarkPlugins={[remarkMath,remarkTables]} rehypePlugins={[rehypeKatex]}>{body}</ReactMarkdown></div>}
export function NoteContent({note}:{note:Note}){
 if(note.mathBody)return <>{parallelSections(note).map(section=><section className="export-pair" key={section.id}><h2>{section.id} · {section.title}</h2><h3>Explanation</h3><Markdown body={section.explanation}/><h3>Maths</h3><Markdown body={section.math}/></section>)}</>;
 return <Markdown body={note.body}/>;
}
