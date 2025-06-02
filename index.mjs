// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as e,isObject as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";function n(t){return e(t)&&t<0&&t>i}function r(t){return s(t)&&t.valueOf()<0&&t.valueOf()>i}function m(t){return n(t)||r(t)}t(m,"isPrimitive",n),t(m,"isObject",r);export{m as default,r as isObject,n as isPrimitive};
//# sourceMappingURL=index.mjs.map
