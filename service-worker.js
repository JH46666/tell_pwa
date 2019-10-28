var cacheName = 'hello world';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll([
      '/script/index.js',
      '/images/images.png'
    ]))
  )
})

self.addEventListener('fetch', (event) => {
  // if (/\.jpg$/.test(event.request.url)) {
  //   event.respondWith(fetch('/images/images.jpg'))
  // }
  event.respondWith(
    caches.match(event.request,{ignoreSearch:true}).then(function (response) {
      if (response) {
        return response
      }

      // return fetch(event.request);

      var requestToCache = event.request.clone(); // 复制请求，请求是一个流，它只能使用一次

      return fetch(requestToCache).then(
        function (response) {
          if (!response || response.status !== 200) {
            return response
          }

          var responseToCache = response.clone(); //复制响应，响应是一个流，它只能使用一次

          caches.open(cacheName)
            .then(function (cache) {
              cache.put(requestToCache, responseToCache);
            })

          return response;
        })
    })


  )
})