// ! onelinecode vv1.5.5
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.freeze({__proto__:null,isEmpty:({length:e})=>0===e,removeDuplicates:e=>[...new Set(e)],occurrenceMap:e=>e.reduce(((e,t)=>(e[t]=(e[t]||0)+1,e)),{}),shallowClone:e=>e.slice(0),lowestNumber:e=>Math.min(...e),highestNumber:e=>Math.max(...e),closestNumber:(e,t)=>e.reduce(((e,r)=>Math.abs(r-t)<Math.abs(e-t)?r:e)),indexOfLowestNumber:e=>e.indexOf(Math.min.apply(null,e)),indexOfHighestNumber:e=>e.indexOf(Math.max.apply(null,e)),splitInHalf:e=>[e.slice(0,Math.ceil(e.length/2)),e.slice(Math.ceil(e.length/2))],longestString:e=>e.reduce(((e,t)=>e.length>t.length?e:t)),shortestString:e=>e.reduce(((e,t)=>e.length<t.length?e:t)),shortestStringLength:(e,t=1/0)=>(e.forEach((e=>{e.length<t&&(t=e.length)})),t),longestStringLength:(e,t=0)=>(e.forEach((e=>{e.length>t&&(t=e.length)})),t),oddItems:e=>e.filter(((e,t)=>!0&t)),evenItems:e=>e.filter(((e,t)=>t%2==0)),mergeArrayUnique:(e,t)=>[...new Set([...e,...t])],mergeArray:(e,t)=>[...e,...t],clean:e=>e.filter((e=>!!e||0===e||!1===e)),cleanFalsy:e=>e.filter((e=>e)),sum:e=>e.reduce(((e,t)=>e+t),0),average:e=>e.reduce(((e,t)=>e+t))/e.length,nthItems:(e,t)=>Array.from({length:~~(e.length/t)},((r,l)=>e[(l+1)*t-1])),sortAsc:e=>[...e].sort(((e,t)=>e-t)),sortDesc:e=>[...e].sort(((e,t)=>t-e))});exports.arr=e;
