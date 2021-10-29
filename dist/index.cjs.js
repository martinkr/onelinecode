// ! onelinecode vv1.5.5
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.highestNumber=e=>Math.max(...e),exports.isEmpty=({length:e})=>0===e,exports.lowestNumber=e=>Math.min(...e),exports.occurrenceMap=e=>e.reduce(((e,t)=>(e[t]=(e[t]||0)+1,e)),{}),exports.removeDuplicates=e=>[...new Set(e)],exports.shallowClone=e=>e.slice(0);
