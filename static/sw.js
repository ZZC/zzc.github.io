importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09e8f53.js",
    "revision": "85515d368fbddb53b7219e6cab4375bd"
  },
  {
    "url": "/_nuxt/0e1f437.js",
    "revision": "c1cc4cb049a256627da8b61914658bb8"
  },
  {
    "url": "/_nuxt/0e623fd.js",
    "revision": "caf5677f9f4a020410aca1a8530b14c6"
  },
  {
    "url": "/_nuxt/6e96c09.js",
    "revision": "eca7fa61c7ac74447ba03dc25cb0724c"
  },
  {
    "url": "/_nuxt/849c4a7.js",
    "revision": "7143e7dad040380c6a82d2797094b1d3"
  },
  {
    "url": "/_nuxt/b8c3fbf.js",
    "revision": "b18cb7ba41596a655b3c6c0822c9766f"
  },
  {
    "url": "/_nuxt/c940839.js",
    "revision": "368db3ed6e3615eac5db41e6cf2e33de"
  },
  {
    "url": "/_nuxt/d2eefd3.js",
    "revision": "6c1788e2eb5be77a0a0dba79c5334828"
  },
  {
    "url": "/_nuxt/dc46951.js",
    "revision": "70a7398c596e2a922f16038696c5fac3"
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
