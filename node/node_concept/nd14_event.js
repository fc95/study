/**
 * Created by 胡林云 on 2017/4/10.
 */
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
var m = 0;

//1-------------给监听器传入参数与 this ，标准的this关键词会被设置指向监听器所附加的 EventEmitter
/*myEmitter.on('event', function(a , b){
  console.log(a ,b ,this);  
});*/

//2-------------给监听器传入参数与 this ，这样 this 关键词就不再指向 EventEmitter
/*myEmitter.on('event', (a , b) =>{
  //console.log(a , b , this);   // 3 4 {}
})*/

//3-------------setImmediate() 或 process.nextTick() 方法切换到异步操作模式
/*myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('这个是异步发生的' , a , b);
  });
  console.log('同步执行完毕' , a ,b);
});*/

//4--------------只处理事件一次
//当使用 eventEmitter.on() 方法注册监听器时，监听器会在每次触发命名事件时被调用。
//使用 eventEmitter.once() 方法时可以注册一个对于特定事件最多被调用一次的监听器。 
//当事件被触发时，监听器会被注销，然后再调用。
/*myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
myEmitter.emit('event');
*/

//5---------------错误事件
//如果 EventEmitter 没有为 'error' 事件注册至少一个监听器，则当 'error' 事件触发时，
//会抛出错误、打印堆栈跟踪、且退出 Node.js 进程。
myEmitter.emit('error', new Error('whoops!'));
















