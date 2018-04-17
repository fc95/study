/**
 * Created by 胡林云 on 2017/4/10.
 */
const http = require('http');
const optfile = require('./models/optfile');
http.createServer(function(request ,response){
  response.writeHead(200 ,{'Content-Type':'image/jpeg'});
  if(request.url !=='/favicon.ico'){
    optfile.readImg('./imgs/flower.jpg' ,response);
    console.log('继续执行!');
  }
}).listen(8000);
console.log('127.0.0.1:8000');