"use strict";var precacheConfig=[["./index.html","37a4a57ea96e90a46c97691e686459fc"],["./static/css/main.72c0e1be.css","34097b1fa94745e305f8f1a24f72b38a"],["./static/js/0.a38a7092.chunk.js","49f57ed9bdfc8966696c9ccf30d42be2"],["./static/js/1.8a98e7a4.chunk.js","d07b0238687817a15fbfef49c0301504"],["./static/js/10.069b747d.chunk.js","7c80825e4020b6edc67a47febf9e9c80"],["./static/js/11.a68a7ffc.chunk.js","c0b02df751aad9bd26c22dd3356e946e"],["./static/js/12.caad70c8.chunk.js","08dbd3c428eea1446fe483152ecc4b98"],["./static/js/13.4b5e558b.chunk.js","f8f8b8b413cb43aea14c22ba36041ab7"],["./static/js/14.cbefcc73.chunk.js","7abc68afcf39655d69b129ca44049309"],["./static/js/15.8a8961e1.chunk.js","13056b48468d31035d25a4016f70441c"],["./static/js/16.5d2979ad.chunk.js","e2e06cf1373651f9c461f245f4be01a6"],["./static/js/17.000bf278.chunk.js","892e38a92cfcd1c00e7642887123061f"],["./static/js/18.9e67a7a7.chunk.js","9c2f831337e735e8344df471514d5be9"],["./static/js/19.ceb3a038.chunk.js","19eb460df0e96cc3498b9961734a17c8"],["./static/js/2.0688e354.chunk.js","0c1490af33c007338eddc5221bb466d6"],["./static/js/20.092be58d.chunk.js","69dce29eb08aeff773354028a732db05"],["./static/js/21.b751ef84.chunk.js","7af34a4372273a6219b12b22494bc0a6"],["./static/js/22.cc21cfbd.chunk.js","7a1faf8c53b99eeea7d764066568c038"],["./static/js/23.b1ee9434.chunk.js","ac9a5962f2e04589b4b279ac851cf316"],["./static/js/3.1bc4e229.chunk.js","4878dc046ad834e576fc810744e5070f"],["./static/js/4.c80ff3f5.chunk.js","37f05beddefc374cceb44bd8a18f2ac5"],["./static/js/5.75afaaa4.chunk.js","c88c5822ffbf686c54b4f4980df1da35"],["./static/js/6.f1fe72af.chunk.js","fd86ed8e23892e5ccb5caf686e4f820c"],["./static/js/7.cbe5156b.chunk.js","8e174b5f7e147ceb08ab4e30f8e245e5"],["./static/js/8.fa149d56.chunk.js","17bf9e222fa350782d39f2e667dd0dc7"],["./static/js/9.ac12429d.chunk.js","55fc04243428ac7894d6481c5141a132"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return c.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!c.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,c=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,a),e=urlsToCacheKeys.has(c));var n="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(c=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});