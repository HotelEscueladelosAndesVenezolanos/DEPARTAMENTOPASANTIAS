const CACHE_NAME = "sistema-pasantias-v4"; // Incrementa la versión para forzar actualización
const STATIC_FILES = [
  "./index.html",
  "./styles.css",
  "./app.js",
  "./config.js",
  "./manifest.json",
  "./hotelescuela.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Usamos Promise.allSettled para que si una imagen falla, no rompa todo el caché
        return Promise.allSettled(STATIC_FILES.map(url => cache.add(url).catch(err => console.warn("Cache fallido para:", url, err))));
      })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.hostname.includes("script.google.com") || url.hostname.includes("googleusercontent.com")) return;
  
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200 && response.type === "basic") {
          const copia = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copia));
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cache => cache || caches.match("./index.html"));
      })
  );
});

self.addEventListener("message", event => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});