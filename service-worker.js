var cacheName = 'hello world';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll([
      '/script/index.js',
      '/images/images.png'
    ]))
  )
})

self.addEventListener('install', function (event) {
  event.waitUntil(self.skipWaiting()) //激活当前的worker，丢弃旧worker
})
//self.clients.claim（）


self.addEventListener('active', function () {
  event.waitUntil(self.clients.clamin)
})
self.addEventListener('fetch', (event) => {
  // if (/\.jpg$/.test(event.request.url)) {
  //   event.respondWith(fetch('/images/images.jpg'))
  // }

  if (/\.jpg$/.test(event.request.url)) {
    event.respondWith(
      new Response('hello', {
        headers: {
          'Content-Type': 'text/html'
        }
      })
    )
  }


  event.respondWith(
    caches.match(event.request, {
      ignoreSearch: true,
      // ignoreMethod; true, //忽略请求的方法
      // ignoreVary: true //忽略已缓存响应中的vary响应头
    }).then(function (response) {
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

  self.addEventListener('fetch', (event) => {
    if (/\.jpg$ | .png$/.test(event.request.url)) {
      var supportsWebp = false;
      if (event.request.headers.has('accept')) {
        supportsWebp = event.request.headers.get('accept').includes('webp');
      }

      if(supportsWebp){
        var req = event.request.clone();
        var returnUrl = req.url.substr(0, req.url.lastIndexOf('.')) + '.webp';

        event.respondWith(
          fetch(returnUrl,{
            mode: "no-cors"
          })
        )
      }
    }
  })

})