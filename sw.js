// Service worker de RecoRun: «red primero».
// Siempre intenta descargar la última versión; la copia guardada solo se usa sin conexión.
var CACHE = 'recorun-v1';
var ARCHIVOS = [
  './',
  './index.html',
  './icono.svg',
  './icono-192.png',
  './icono-512.png',
  './apple-touch-icon.png',
  './manifest.webmanifest'
];

self.addEventListener('install', function (evento) {
  evento.waitUntil(
    caches.open(CACHE)
      .then(function (cache) { return cache.addAll(ARCHIVOS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (evento) {
  evento.waitUntil(
    caches.keys()
      .then(function (nombres) {
        return Promise.all(nombres
          .filter(function (nombre) { return nombre !== CACHE; })
          .map(function (nombre) { return caches.delete(nombre); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (evento) {
  var peticion = evento.request;
  if (peticion.method !== 'GET' || new URL(peticion.url).origin !== self.location.origin) return;

  evento.respondWith(
    fetch(peticion, { cache: 'no-store' })
      .then(function (respuesta) {
        if (respuesta.ok) {
          var copia = respuesta.clone();
          caches.open(CACHE).then(function (cache) { cache.put(peticion, copia); });
        }
        return respuesta;
      })
      .catch(function () {
        return caches.match(peticion, { ignoreSearch: true }).then(function (guardada) {
          if (guardada) return guardada;
          if (peticion.mode === 'navigate') return caches.match('./index.html');
          return Response.error();
        });
      })
  );
});
