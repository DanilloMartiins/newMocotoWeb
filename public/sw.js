const CACHE_NAME = 'mocoto-app-v1'
const IMAGE_CACHE = 'mocoto-images-v1'

self.addEventListener('install', (event) => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== IMAGE_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)

  // imagens do /assets (webp, jpg, png): cache na 1a visita, do cache na 2a
  if (
    url.pathname.startsWith('/assets/') &&
    /\.(webp|jpg|jpeg|png|gif|svg)$/.test(url.pathname)
  ) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) =>
        cache.match(event.request).then((cached) => {
          if (cached) return cached

          return fetch(event.request)
            .then((response) => {
              if (response.ok) {
                cache.put(event.request, response.clone())
              }
              return response
            })
            .catch(() => new Response('', { status: 404 }))
        })
      )
    )
    return
  }

  // navegacao: tenta rede, guarda copia, offline usa o cache
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        fetch(event.request)
          .then((response) => {
            cache.put(event.request, response.clone())
            return response
          })
          .catch(() => cache.match(event.request))
      )
    )
    return
  }

  // resto: rede primeiro, cai pro cache se falhar
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && event.request.method === 'GET') {
          const clone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone))
        }
        return response
      })
      .catch(() => caches.match(event.request))
  )
})
