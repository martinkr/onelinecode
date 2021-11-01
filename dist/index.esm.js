// ! onelinecode vv1.5.5
<<<<<<< HEAD
var e=Object.freeze({__proto__:null,isEmpty:({length:e})=>0===e,removeDuplicates:e=>[...new Set(e)],occurrenceMap:e=>e.reduce(((e,l)=>(e[l]=(e[l]||0)+1,e)),{}),shallowClone:e=>e.slice(0),lowestNumber:e=>Math.min(...e),highestNumber:e=>Math.max(...e),closestNumber:(e,l)=>e.reduce(((e,t)=>Math.abs(t-l)<Math.abs(e-l)?t:e)),indexOfLowestNumber:e=>e.indexOf(Math.min.apply(null,e)),indexOfHighestNumber:e=>e.indexOf(Math.max.apply(null,e)),splitInHalf:e=>[e,e.splice(~~((e.length+1)/2))]});export{e as arr};
=======
var e=Object.freeze({__proto__:null,isEmpty:({length:e})=>0===e,removeDuplicates:e=>[...new Set(e)],occurrenceMap:e=>e.reduce(((e,l)=>(e[l]=(e[l]||0)+1,e)),{}),shallowClone:e=>e.slice(0),lowestNumber:e=>Math.min(...e),highestNumber:e=>Math.max(...e),closestNumber:(e,l)=>e.reduce(((e,t)=>Math.abs(t-l)<Math.abs(e-l)?t:e)),indexOfLowestNumber:e=>e.indexOf(Math.min.apply(null,e)),indexOfHighestNumber:e=>e.indexOf(Math.max.apply(null,e)),splitInHalf:e=>[e.slice(0,Math.ceil(e.length/2)),e.slice(Math.ceil(e.length/2))]});export{e as arr};
>>>>>>> cc5eafbb54d58a203370e18c6eac7e863c28f8b7
