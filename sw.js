/*
=========================================================
 SERVICE WORKER
 Sistema de Pasantías
 Versión 3.0
=========================================================
*/

const CACHE_NAME = "sistema-pasantias-v3";

const STATIC_FILES = [
    "./",
    "./index.html",
    "./styles.css",
    "./app.js",
    "./config.js",
    "./manifest.json",
    "./hotelescuela.png",
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];

/* ==========================
   INSTALACIÓN
========================== */

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_FILES))

    );

    self.skipWaiting();

});

/* ==========================
   ACTIVACIÓN
========================== */

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

/* ==========================
   FETCH
========================== */

self.addEventListener("fetch", event => {

    if (event.request.method !== "GET") {
        return;
    }

    const url = new URL(event.request.url);

    /*
    No cachear Apps Script,
    Drive ni servicios Google
    */

    if (
        url.hostname.includes("script.google.com") ||
        url.hostname.includes("script.googleusercontent.com") ||
        url.hostname.includes("googleusercontent.com") ||
        url.hostname.includes("google.com")
    ) {
        return;
    }

    /*
    Network First
    Siempre intenta descargar
    la versión nueva
    */

    event.respondWith(

        fetch(event.request)

            .then(response => {

                if (
                    response &&
                    response.status === 200 &&
                    response.type === "basic"
                ) {

                    const copia = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {

                            cache.put(event.request, copia);

                        });

                }

                return response;

            })

            .catch(() => {

                return caches.match(event.request)
                    .then(cache => {

                        return cache || caches.match("./index.html");

                    });

            })

    );

});

/* ==========================
   MENSAJES
========================== */

self.addEventListener("message", event => {

    if (event.data === "SKIP_WAITING") {

        self.skipWaiting();

    }

});

/* ==========================
   SINCRONIZAR CACHÉ
========================== */

async function actualizarCache() {

    const cache = await caches.open(CACHE_NAME);

    await cache.addAll(STATIC_FILES);

}

/* ==========================
   BACKGROUND SYNC
========================== */

self.addEventListener("sync", event => {

    if (event.tag === "actualizar-cache") {

        event.waitUntil(actualizarCache());

    }

});