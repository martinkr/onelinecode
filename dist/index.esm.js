// ! onelinecode vv1.5.5
var e=Object.freeze({__proto__:null,isEmpty:({length:e})=>0===e,removeDuplicates:e=>[...new Set(e)],occurrenceMap:e=>e.reduce(((e,r)=>(e[r]=(e[r]||0)+1,e)),{}),shallowClone:e=>e.slice(0),lowestNumber:e=>Math.min(...e),highestNumber:e=>Math.max(...e)});export{e as Array};
