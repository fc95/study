const http = require('http');
const optfile = require('./models/optfile');
http.createServer(function(request ,response){
	response.writeHead(200 ,{'Content-Type':'text/html;  charset=utf-8'});
	if(request.url !=='/favicon.ico'){
		//optfile.readfileSync('./views/login.html');
		function recall(data){
			response.write(data);
			response.end('ok');
		}
		optfile.readfile('./views/login.html' ,recall);
		//optfile.readfile('./views/login.html' ,response);
		//response.end('ok');// 不写则没有http协议尾
		console.log('主程序执行完毕!');
	}
}).listen(8000);
console.log('127.0.0.1:8000');

