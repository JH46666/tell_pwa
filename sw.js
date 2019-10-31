
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

/**
 * 阻止添加到主屏幕
 */
window.addEventListener('beforeinstallprompt', function(e){
  e.preventDefault();
  return false;
})

/**
 * 追踪用户是否添加到主屏幕
 */
window.addEventListener('beforeinstallprompt', function(e){
  e.userChoice.then(function(result){
    console.log(result.outcome);
    if(result.outcome){

    } else{

    }
  })
})

/**
 * 推迟的原理是去掉原生的这个事件，转为我们自定义的btn事件
 */


/**
 * 推送的订阅
 */




 /**
  * 取消订阅通知
  */



const { Generat  }  = require('workbox-webpack-plugin')