// ! onelinecode v1.5.2
const e=({length:e})=>0===e,s=e=>[...new Set(e)],a=e=>e.reduce(((e,s)=>(e[s]=(e[s]||0)+1,e)),{}),t=e=>e.slice(0),c=e=>Math.min(...e);export{e as isEmpty,c as lowestNumber,a as occurrenceMap,s as removeDuplicates,t as shallowClone};
