"use strict";var precacheConfig=[["icon_256x256.0130f1421601c332d13ab653c8caa0e1.svg","0130f1421601c332d13ab653c8caa0e1"],["icon_256x256.97d8b627e901e4d2f23e91e5ad79a7b7.png","97d8b627e901e4d2f23e91e5ad79a7b7"],["index.html","726aabe97de87e48df22b1f12bdedb65"],["manifest.497eaf6d81671278d9f9b79674d134f9.json","497eaf6d81671278d9f9b79674d134f9"],["static/TestData.json","bea5633e1b24398562e1ee48c98e2fe0"],["static/css/app.3415da9c1c4b7837e4a79fc946aae377.css","fb3c0e944a0c198b8a809aed3a647273"],["static/img/iconfont.8f37516.svg","8f3751610096f83f443e026eabbe1794"],["static/img/logo.ico","a32b556c336a6e2ab32897102a74b3ba"],["static/img/logo.png","11e99a37febaaef7be10b1c4d33ab020"],["static/img/logo.svg","0130f1421601c332d13ab653c8caa0e1"],["static/js/app.20b4fb0a11e21b58f1ca.js","7d296e186d6c0007de17ad19c07df74a"],["static/js/manifest.ae35446f8a6316ae6381.js","850c5de0d6c4f2a12a80b32c8a752941"],["static/js/vendor.f1e946be04593415825b.js","39a940361bfda05c898c787ccc2bbcad"],["sw.js","47cbf92c21591fff1ee2795d0d907024"]],cacheName="sw-precache-v3-tiku_v2-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,!1);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});