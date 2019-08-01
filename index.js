function name(){



}

var o = {
    myfunc(){

    }
}
console.log(o.myfunc.name)



//macro  setTimeout  setInterval

//macroTask
//microTask  microTask  microTask
//macroTask
//microTask  microTask  microTask

//micro  console.log   promise   
//promsie 永远会在队列尾部添加微观任务


var r = new Promise(function(resolve, reject){
    console.log("a");
    resolve()
});
r.then(() => console.log("c"));
console.log("b")

//seTimeout 将代码切分为两快

// abc


// console.log('sync1');

// setTimeout(function () {
//     console.log('setTimeout1')
// }, 0);

// var promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('setTimeoutPromise')
//     }, 0);
//     console.log('promise');
//     resolve();
// });


// promise.then(() => {
//     console.log('pro_then');
//     setTimeout(() => {
//         console.log('pro_timeout');
//     }, 0)
// })

// setTimeout(function () {
//     console.log('last_setTimeout')
// }, 0);
// console.log('sync2');


//解答
// sync1   
// promise
// pr_then
// sync2
// setTimeoutPromise
// pro_timeout
// setTimeout1
// last_setTimeout


function  test(...arg){
    console.log(this.variable + arg)
}

var obj = {
    variable :1
}

test();

test.apply(obj,[2,2,3])
test.call(obj,2)
var c = test.bind(obj,3);
c();

//把obj绑定到thisObj,这时thisObj就具备了obj的属性和方法。 
// 与call和apply不同的是，bind绑定之后返回绑定完成的函数， 不会立即执行，需要再显式执行一次此函数才能完成调用。