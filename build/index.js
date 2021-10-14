/*!
 * 
 *   filename-to-url v1.0.0
 *   https://github.com/rmlzy/filename-to-url
 *
 *   Copyright (c) rmlzy (https://poppython.com) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(self,(function(){return(()=>{"use strict";var e={d:(r,t)=>{for(var o in t)e.o(t,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:t[o]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{filenameToUrl:()=>t});var t=function(e,r){r=r||{replace:""};var t=(e=e||"").length;if(0===t)return e;for(var o=new RegExp("[!\"#$%&'()+,/:;<=>?@\\[\\]^`{|}~]"),n="",f=0;f<t;f++)n+=e.substr(f,1).replace(o,r.replace);return n};return r})()}));
//# sourceMappingURL=index.js.map