/**
 * Created by 胡林云 on 2017/4/10.
 */
const http = require('http');
const url = require('url');
const router = require('./models/routers');
http.createServer(function(request ,response){
  if(request.url !=='/favicon.ico'){
    let pathname = url.parse(request.url).pathname ;
    pathname = pathname.replace(/\//g,'');
    //同步异常 <= try,catch捕获
    //异步异常 <=异步方法，if(err){ ---这里面做处理--- }
    try{
      router[pathname](request ,response) ;
    }catch(e){
      console.log(e);
      response.write(pathname + '路由不存在');
      response.end();
    }
  }
}).listen(8000);
console.log('127.0.0.1:8000');