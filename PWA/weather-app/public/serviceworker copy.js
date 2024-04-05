const CACHE_NAME = "version-1";
const dynamicCacheName = "version-dynamic-1";
const urlsToCache = ["index.html", "offline.html"];
const self = this;
const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};
// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("opened cache");
        return cache.addAll(urlsToCache);
      })
      .catch((error) => console.log("cache failed to open", error))
  );
});
// Listen for  requests

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((cacheRes) => {
        console.log("fetch cache");
        return (
          cacheRes ||
          fetch(event.request)
            .then((fetchRes) => {
              return caches
                .open(dynamicCacheName)
                .then((cache) => {
                  cache.put(event.request.url, fetchRes.clone());
                  limitCacheSize(dynamicCacheName, 15);
                })
                .catch((error) => console.log("dynamic cache error", error));
            })
            .catch((error) => caches.match("offline.html"))
        );
      })
      .catch((error) => console.log("cache failed to fetch", error))
  );
});
// Active SW

self.addEventListener("active", (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((key) => key !== CACHE_NAME && key !== dynamicCacheName)
            .map((cacheName) => {
              if (!cacheWhiteList.includes(cacheName)) {
                return caches.delete(cacheName);
              }
            })
        );
      })
      .catch((error) => console.log("cache failed to active", error))
  );
});
