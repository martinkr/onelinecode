// ! onelinecode vv1.5.5
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.freeze({__proto__:null,isEmpty:({length:e})=>0===e,removeDuplicates:e=>[...new Set(e)],occurrenceMap:e=>e.reduce(((e,t)=>(e[t]=(e[t]||0)+1,e)),{}),shallowClone:e=>e.slice(0),lowestNumber:e=>Math.min(...e),highestNumber:e=>Math.max(...e),closestNumber:(e,t)=>e.reduce(((e,r)=>Math.abs(r-t)<Math.abs(e-t)?r:e))});exports.arr=e;
