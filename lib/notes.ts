import {readTopicFiles} from './content.mjs';
export type Note={id:string;title:string;subject:string;topicSlug:string;directory:string;summary?:string;body:string;mathBody?:string;position:number;updatedAt:string;builtin?:boolean};
export type Topic={slug:string;title:string;description:string;order:number};
const files=import.meta.glob<string>('../topics/**/*.md',{query:'?raw',import:'default',eager:true});
const content=readTopicFiles(files);
export const notes=content.notes;
export const topics=content.topics;
