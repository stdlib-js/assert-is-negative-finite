"use strict";var e=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var t=e(function(I,n){
var N=require('@stdlib/assert-is-number/dist').isPrimitive,m=require('@stdlib/constants-float64-ninf/dist');function o(i){return N(i)&&i<0&&i>m}n.exports=o
});var s=e(function(d,v){
var O=require('@stdlib/assert-is-number/dist').isObject,b=require('@stdlib/constants-float64-ninf/dist');function f(i){return O(i)&&i.valueOf()<0&&i.valueOf()>b}v.exports=f
});var c=e(function(y,a){
var F=t(),j=s();function p(i){return F(i)||j(i)}a.exports=p
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=c(),x=t(),P=s();q(u,"isPrimitive",x);q(u,"isObject",P);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
