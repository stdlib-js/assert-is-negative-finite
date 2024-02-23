"use strict";var r=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var t=r(function(d,n){
var m=require('@stdlib/assert-is-number/dist').isPrimitive,b=require('@stdlib/assert-is-finite/dist').isPrimitive;function o(i){return m(i)&&i<0&&b(i)}n.exports=o
});var s=r(function(y,v){
var O=require('@stdlib/assert-is-number/dist').isObject,j=require('@stdlib/assert-is-finite/dist').isObject;function F(i){return O(i)&&i.valueOf()<0&&j(i)}v.exports=F
});var a=r(function(R,c){
var N=t(),P=s();function f(i){return N(i)||P(i)}c.exports=f
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=a(),p=t(),x=s();q(u,"isPrimitive",p);q(u,"isObject",x);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
