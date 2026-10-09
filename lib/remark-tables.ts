// Recognize the pipe tables in the bundled notes while retaining parsed inline
// math, emphasis, and links. ReactMarkdown's default parser omits GFM tables.
type Node={type:string;value?:string;children?:Node[];align?:null[]};
export function remarkTables(){
 return (tree:Node)=>{
  function walk(parent:Node){
   if(!parent.children)return;
   parent.children=parent.children.map(node=>{
    if(node.type!=='paragraph'||!node.children?.[0]?.value?.trimStart().startsWith('|')){walk(node);return node}
    const rows:Node[][][]=[[[]]];
    for(const child of node.children){
     if(child.type!=='text'){rows[rows.length-1][rows[rows.length-1].length-1].push(child);continue}
     for(const part of (child.value||'').split(/([|\n])/)){
      if(part==='|')rows[rows.length-1].push([]);
      else if(part==='\n')rows.push([[]]);
      else if(part)rows[rows.length-1][rows[rows.length-1].length-1].push({...child,value:part});
     }
    }
    const cells=rows.filter(row=>row.length>1).map(row=>row.slice(1,-1));
    if(cells.length<3||!cells[1].every(cell=>/^\s*:?-{3,}:?\s*$/.test(cell.map(n=>n.value||'').join(''))))return node;
    const width=cells[0].length;
    if(cells.some(row=>row.length!==width))return node;
    return {type:'table',align:Array(width).fill(null),children:cells.filter((_,i)=>i!==1).map(row=>({type:'tableRow',children:row.map(cell=>({type:'tableCell',children:cell}))}))};
   });
  }
  walk(tree);
 };
}
