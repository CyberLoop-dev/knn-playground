export function classify(points,query,k=3){
  if(!Array.isArray(points)||points.length===0)throw new Error("Add at least one training point.");
  if(!query||!Number.isFinite(query.x)||!Number.isFinite(query.y))throw new Error("Query coordinates must be finite numbers.");
  if(!Number.isInteger(k)||k<1)throw new Error("k must be a positive integer.");
  const normalized=points.map((p,index)=>{if(!Number.isFinite(p.x)||!Number.isFinite(p.y)||!String(p.label??"").trim())throw new Error("Each point needs finite x/y coordinates and a label.");return {...p,label:String(p.label),index,distance:Math.hypot(p.x-query.x,p.y-query.y)};});
  const neighbors=normalized.sort((a,b)=>a.distance-b.distance||a.index-b.index).slice(0,Math.min(k,normalized.length));
  const scores=new Map();for(const p of neighbors){const entry=scores.get(p.label)||{count:0,totalDistance:0};entry.count++;entry.totalDistance+=p.distance;scores.set(p.label,entry);}
  const ranking=[...scores.entries()].sort((a,b)=>b[1].count-a[1].count||a[1].totalDistance-b[1].totalDistance||a[0].localeCompare(b[0]));
  return {label:ranking[0][0],neighbors,scores:Object.fromEntries(ranking.map(([label,s])=>[label,{count:s.count,averageDistance:s.totalDistance/s.count}]))};
}
export const demoPoints=[
{x:-6,y:-4,label:"A"},{x:-4,y:-6,label:"A"},{x:-7,y:-1,label:"A"},{x:-3,y:-3,label:"A"},{x:-5,y:-1,label:"A"},
{x:5,y:4,label:"B"},{x:7,y:2,label:"B"},{x:4,y:7,label:"B"},{x:2,y:4,label:"B"},{x:6,y:7,label:"B"}
];
