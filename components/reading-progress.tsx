import {useEffect,useRef,useState,type RefObject} from 'react';

export function readingPercentage(top:number,bottom:number,viewportHeight:number,headerHeight:number){
 const distance=bottom-top-(viewportHeight-headerHeight);
 if(distance<=0)return top<=headerHeight?100:0;
 return Math.round(Math.min(1,Math.max(0,(headerHeight-top)/distance))*100);
}

export function ReadingProgress({content}:{content:RefObject<HTMLDivElement|null>}){
 const [percent,setPercent]=useState(0);
 const bar=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const article=content.current;
  if(!article)return;
  let frame=0;
  const update=()=>{
   frame=0;
   const rect=article.getBoundingClientRect();
   const header=bar.current?.closest('header')?.getBoundingClientRect().bottom||0;
   setPercent(readingPercentage(rect.top,rect.bottom,window.innerHeight,header));
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
  const observer=new ResizeObserver(schedule);
  observer.observe(article);
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule);
  schedule();
  return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule)};
 },[content]);
 return <div ref={bar} className="reading-progress" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent} aria-valuetext={`${percent}% read`}>
  <span className="reading-percentage" aria-hidden="true">{percent}%</span>
  <span className="reading-progress-fill" style={{transform:`scaleX(${percent/100})`}}/>
 </div>;
}
