class Component {
    constructor(value){
        this.value = value;
    }

    method(){
        return this.value
    }

}




// autobind-decorator

// es7已经淘汰了bind的写法 ，而使用::  ：：obj.method


//object 有如下语法

//delegat 可以将一个对象的方法、属性等委托给另一个对象。
//koa的上下文对象ctx可以访问一些request和response上的方法、属性，原因在于，request或者response上的方法、属性被委托给了ctx对象


// 先获得delegate引用对象


const delegate = require('delegate');
const proto = {


}

/***
 * response delegation
 * 
 * 
 *  */

 delegate(proto, 'response')
    .method('redirect')
    // ... 
    .access('body')
    // ... 

    //将上面的代码委托给response上的属性
    app.use(function(ctx, next){
        ctx.body = 'xxx'
        //ctx.redirect('/url')
    })

//es7的装饰器作用
//在原有的基础函数上，不扰乱原先的代码


// new 产生的对象  类型是object  实例对象是各个类型 Array  Number  
//  object.prototype.toString Array  Number
// undefined 比较特殊 oBJECT


// configure 是用来检测安装平台的目标特征的