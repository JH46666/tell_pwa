
const cacheName = 'Yd-add-file '
const filesToCache = [
    '/images/time.jpg'
]


// function updateState(){
//     return caches.open(cacheName)
//             .then(function cache(){
//                 return cache.addAll(){

//                 }
//             })
// }



self.addEventListener('install',()=>{
    console.log('安装成功')
})

self.addEventListener('actived',()=>{
    console.log('激活成功')


    event.waitUntil(caches.keys().then(function(keyList){
        return Promise.all(keyList.map(function(key){

        }))
    }))
})


self.addEventListener('fetch',(event)=>{
    event.respondWith(new Response('123'))
})


const { Generat  }  = require('workbox-webpack-plugin')