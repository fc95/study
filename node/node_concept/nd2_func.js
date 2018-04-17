const http = require('http');
const otherfuns = require('./models/funs');
http.createServer(function(request ,response){
	response.writeHead(200 ,{'Content-Type':'text/html;  charset=utf-8'});
	//console.log(request.url);  //第一次==》'/' ,第二次==》'/favicon.ico'
	if(request.url !=='/favicon.ico'){ //清除第二次访问
		//fun1(response);
		//otherfuns.fun2(response);
		//--------用字符串调用对应的函数
		let funName = 'fun2';
		otherfuns[funName](response);
		response.end();
	}
}).listen(8000);
console.log('127.0.0.1:8000');

function fun1(res){
	console.log('fun1');
	res.write('hello fun1');
}