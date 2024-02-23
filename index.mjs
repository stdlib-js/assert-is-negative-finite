// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as s,isObject as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import{isPrimitive as t,isObject as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-finite@v0.2.1-esm/index.mjs";function n(i){return s(i)&&i<0&&t(i)}function m(i){return e(i)&&i.valueOf()<0&&r(i)}function d(i){return n(i)||m(i)}i(d,"isPrimitive",n),i(d,"isObject",m);export{d as default,m as isObject,n as isPrimitive};
//# sourceMappingURL=index.mjs.map
