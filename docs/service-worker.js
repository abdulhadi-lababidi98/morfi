"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/form4react/index.html","ca0143539cdb0af4e4e5b1cd15521bc0"],["/form4react/static/css/main.c8fbb9d4.css","34b4aa5a956e5072743d7589f44a93a6"],["/form4react/static/js/main.73f5f258.js","bc86ab3c148ed266cf68cbb8a3824161"],["/form4react/static/media/fa-brands-400.2324cf82.svg","2324cf820010c10e0bc35b2b99f9b568"],["/form4react/static/media/fa-brands-400.3189f3e1.woff2","3189f3e1d3b91f842e3aa647c7728bfe"],["/form4react/static/media/fa-brands-400.951e024f.ttf","951e024f1f7cfe33c4838a3c146d5408"],["/form4react/static/media/fa-brands-400.bf6522fe.eot","bf6522fea650fffa9a4ca3f2fc6c5062"],["/form4react/static/media/fa-brands-400.df6b6c39.woff","df6b6c3900c43cafe91cdaa5caa39c71"],["/form4react/static/media/fa-regular-400.17b76241.woff","17b7624171b4b447d2e783a88a016391"],["/form4react/static/media/fa-regular-400.32837fb7.svg","32837fb71c7b475d67795d4260af454b"],["/form4react/static/media/fa-regular-400.57036b12.woff2","57036b128ae0c649e364c581ce450970"],["/form4react/static/media/fa-regular-400.72ca8dd9.ttf","72ca8dd93f526b4f21e3e39aa79d9bcc"],["/form4react/static/media/fa-regular-400.77f20321.eot","77f203215b127bbbf1028a0b90d1c73a"],["/form4react/static/media/fa-solid-900.4194be4b.eot","4194be4b16699db0db223f40060f661f"],["/form4react/static/media/fa-solid-900.60e625f3.woff","60e625f3538c9e9aa2a955a6994156fc"],["/form4react/static/media/fa-solid-900.6ae956a3.woff2","6ae956a36625015a447446e8f489f267"],["/form4react/static/media/fa-solid-900.e9aa29f3.svg","e9aa29f32b2bdbb9988fb97b37f16e42"],["/form4react/static/media/fa-solid-900.eb1e2d8f.ttf","eb1e2d8f80107f26e5ba6fdce5ea4fe3"],["/form4react/static/media/form-logo.5fff4088.svg","5fff408897cce5bd7c9420f59d623291"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/form4react/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});