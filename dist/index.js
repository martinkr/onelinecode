// ! onelinecode vv1.5.5
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).onelinecode={})}(this,(function(e){"use strict";var t=Object.freeze({__proto__:null,isEmpty:({length:e})=>0===e,removeDuplicates:e=>[...new Set(e)],occurrenceMap:e=>e.reduce(((e,t)=>(e[t]=(e[t]||0)+1,e)),{}),shallowClone:e=>e.slice(0),lowestNumber:e=>Math.min(...e),highestNumber:e=>Math.max(...e),closestNumber:(e,t)=>e.reduce(((e,o)=>Math.abs(o-t)<Math.abs(e-t)?o:e))});e.arr=t,Object.defineProperty(e,"__esModule",{value:!0})}));
