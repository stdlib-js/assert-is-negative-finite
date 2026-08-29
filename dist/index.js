"use strict";var e=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(N){throw (r=0, N)}};};var t=e(function(d,n){
var m=require('@stdlib/assert-is-number/dist').isPrimitive,o=require('@stdlib/constants-float64-ninf/dist');function O(i){return m(i)&&i<0&&i>o}n.exports=O
});var s=e(function(y,v){
var b=require('@stdlib/assert-is-number/dist').isObject,f=require('@stdlib/constants-float64-ninf/dist');function F(i){return b(i)&&i.valueOf()<0&&i.valueOf()>f}v.exports=F
});var c=e(function(R,a){
var j=t(),p=s();function x(i){return j(i)||p(i)}a.exports=x
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=c(),P=t(),g=s();q(u,"isPrimitive",P);q(u,"isObject",g);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
