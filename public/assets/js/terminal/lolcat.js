/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/isomorphic-lolcat@0.3.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(n,o){"function"==typeof define&&define.amd?define([],(function(t){return n.lolcat=o()})):"object"==typeof module&&module.exports?module.exports=o():n.lolcat=o()}("undefined"!=typeof global?global:self,(function(n){var o={options:{seed:0,spread:8,freq:.3}},t=o.options,e=function(n,o){return{red:Math.round(127*Math.sin(n*o+0)+128),green:Math.round(127*Math.sin(n*o+2*Math.PI/3)+128),blue:Math.round(127*Math.sin(n*o+4*Math.PI/3)+128)}},r=function(n,o){for(var r=0;r<o.length;r++)n(o[r],e(t.freq,t.seed+r/t.spread))};return o.rainbow=function(n,t,e){var r,f=20,a=e||(r=256,Math.floor(Math.random()*(r+1)));return o.format(n,t,(function(){f-=1,lolcat.options.seed=a+f}))},o.format=function(n,o,t){var e,f,a=[],u=o.split("\n");function i(o,t){e.push(n(o,t))}f="function"==typeof f?f:function(){};for(var d=0;d<u.length;++d)e=[],t(d),r(i,u[d]),a.push(e.join(""));return a},o}));
//# sourceMappingURL=/sm/7fd65f935a75024d7ebd5341c995656127c9ee989b81162685732ce84d43724a.map