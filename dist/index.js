// ! onelinecode vv1.5.5
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).onelinecode={})}(this,(function(e){"use strict";var t=Object.freeze({__proto__:null,isEmpty:({length:e})=>0===e,removeDuplicates:e=>[...new Set(e)],occurrenceMap:e=>e.reduce(((e,t)=>(e[t]=(e[t]||0)+1,e)),{}),shallowClone:e=>e.slice(0),lowestNumber:e=>Math.min(...e),highestNumber:e=>Math.max(...e),closestNumber:(e,t)=>e.reduce(((e,l)=>Math.abs(l-t)<Math.abs(e-t)?l:e)),indexOfLowestNumber:e=>e.indexOf(Math.min.apply(null,e)),indexOfHighestNumber:e=>e.indexOf(Math.max.apply(null,e)),splitInHalf:e=>[e.slice(0,Math.ceil(e.length/2)),e.slice(Math.ceil(e.length/2))],longestString:e=>e.reduce(((e,t)=>e.length>t.length?e:t)),shortestString:e=>e.reduce(((e,t)=>e.length<t.length?e:t)),shortestStringLength:(e,t=1/0)=>(e.forEach((e=>{e.length<t&&(t=e.length)})),t),longestStringLength:(e,t=0)=>(e.forEach((e=>{e.length>t&&(t=e.length)})),t),oddItems:e=>e.filter(((e,t)=>!0&t)),evenItems:e=>e.filter(((e,t)=>t%2==0)),mergeArrayUnique:(e,t)=>[...new Set([...e,...t])],mergeArray:(e,t)=>[...e,...t],clean:e=>e.filter((e=>!!e||0===e||!1===e)),cleanFalsy:e=>e.filter((e=>e)),sum:e=>e.reduce(((e,t)=>e+t),0),average:e=>e.reduce(((e,t)=>e+t))/e.length,nthItems:(e,t)=>Array.from({length:~~(e.length/t)},((l,r)=>e[(r+1)*t-1])),sortAsc:e=>[...e].sort(((e,t)=>e-t)),sortDesc:e=>[...e].sort(((e,t)=>t-e)),shuffle:(e,t)=>Array.from({length:~~(e.length/t)},((l,r)=>e[(r+1)*t-1])),createRange:(e,t,l=Math.sign(t-e))=>Array(Math.abs(t-e+l)).fill().map(((t,r)=>e+l*r))}),l=Object.freeze({__proto__:null,countWords:e=>e.trim().split(/\s+/g).map((e=>e.replace(/[\[\]?.,\/#!$%\^&\*;:{}=\"\-_~()…–—·'’]/g,""))).filter((e=>e)).length,capitalise:e=>`${e[0].toUpperCase()}${e.slice(1)}`});e.arr=t,e.str=l,Object.defineProperty(e,"__esModule",{value:!0})}));
