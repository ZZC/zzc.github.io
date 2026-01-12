importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07d3e57.js",
    "revision": "1ae56337b3f65134db68ea921452c7b0"
  },
  {
    "url": "/_nuxt/33bcb7d.js",
    "revision": "b114210622f7fc19aab747a266f8f9fa"
  },
  {
    "url": "/_nuxt/3bf233b.js",
    "revision": "f41ff564af368e9ec9f048a4ec9771bd"
  },
  {
    "url": "/_nuxt/606da71.js",
    "revision": "c7eb0f86a34fe3edb36d2f2511f2b9f9"
  },
  {
    "url": "/_nuxt/79a0ad8.js",
    "revision": "ed8e26aeaddf0acd66f65eba4618ad24"
  },
  {
    "url": "/_nuxt/87bc746.js",
    "revision": "2bac198abbc30c1782e080eb766d2387"
  },
  {
    "url": "/_nuxt/c940e0e.js",
    "revision": "2d64a6d282daf7cc680ea6a35244abee"
  },
  {
    "url": "/_nuxt/f97d0b9.js",
    "revision": "52d0323ea68f980ab09ed47d787c039f"
  },
  {
    "url": "/_nuxt/fd87052.js",
    "revision": "37dbcdda3af2f3bff65fa82cfb7af8ab"
  }
], {
  "cacheId": "zzc-docs",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
