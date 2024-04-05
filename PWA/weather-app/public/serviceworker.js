const CACHE_NAME = "version-2";
const urlsToCache = ["index.html", "offline.html"];

const self = this;


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
          fetch(event.request).catch(() => caches.match("offline.html"))
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
            .filter((key) => key !== CACHE_NAME)
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
