(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{30:function(t,e,i){(function(t){var n,r,a;function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(c,s){if(c){s=s.bind(null,c,c.document),"object"==o(t)&&t.exports?s(i(29)):(r=[i(29)],void 0===(a="function"==typeof(n=s)?n.apply(e,r):n)||(t.exports=a))}}("undefined"!=typeof window?window:0,(function(t,e,i){"use strict";if(t.addEventListener){var n=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,r=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,a=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,o=/^picture$/i,c=i.cfg,s={getParent:function(e,i){var n=e,r=e.parentNode;return i&&"prev"!=i||!r||!o.test(r.nodeName||"")||(r=r.parentNode),"self"!=i&&(n="prev"==i?e.previousElementSibling:i&&(r.closest||t.jQuery)&&(r.closest?r.closest(i):jQuery(r).closest(i)[0])||r),n},getFit:function(t){var e,i,n=getComputedStyle(t,null)||{},o=n.content||n.fontFamily,c={fit:t._lazysizesParentFit||t.getAttribute("data-parent-fit")};return!c.fit&&o&&(e=o.match(r))&&(c.fit=e[1]),c.fit?(!(i=t._lazysizesParentContainer||t.getAttribute("data-parent-container"))&&o&&(e=o.match(a))&&(i=e[1]),c.parent=s.getParent(t,i)):c.fit=n.objectFit,c},getImageRatio:function(e){var i,r,a,s,u,d,f,l=e.parentNode,p=l&&o.test(l.nodeName||"")?l.querySelectorAll("source, img"):[e];for(i=0;i<p.length;i++)if(r=(e=p[i]).getAttribute(c.srcsetAttr)||e.getAttribute("srcset")||e.getAttribute("data-pfsrcset")||e.getAttribute("data-risrcset")||"",a=e._lsMedia||e.getAttribute("media"),a=c.customMedia[e.getAttribute("data-media")||a]||a,r&&(!a||(t.matchMedia&&matchMedia(a)||{}).matches)){(s=parseFloat(e.getAttribute("data-aspectratio")))||((u=r.match(n))?"w"==u[2]?(d=u[1],f=u[3]):(d=u[3],f=u[1]):(d=e.getAttribute("width"),f=e.getAttribute("height")),s=d/f);break}return s},calculateSize:function(t,e){var i,n,r,a=this.getFit(t),o=a.fit,c=a.parent;return"width"==o||("contain"==o||"cover"==o)&&(n=this.getImageRatio(t))?(c?e=c.clientWidth:c=t,r=e,"width"==o?r=e:(i=e/c.clientHeight)&&("cover"==o&&i<n||"contain"==o&&i>n)&&(r=e*(n/i)),r):e}};i.parentFit=s,e.addEventListener("lazybeforesizes",(function(t){if(!t.defaultPrevented&&t.detail.instance==i){var e=t.target;t.detail.width=s.calculateSize(e,t.detail.width)}}))}}))}).call(this,i(17)(t))}}]);