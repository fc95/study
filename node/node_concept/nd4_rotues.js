const http = require('http');
const url = require('url');
const router = require('./models/routers');
http.createServer(function(request ,response){
	response.writeHead(200 ,{'Content-Type':'text/html;  charset=utf-8'});
	if(request.url !=='/favicon.ico'){
		let pathname = url.parse(request.url).pathname ;
		pathname = pathname.replace(/\//g,'');
		console.log(pathname);
		try{
			router[pathname](request ,response) ;
		}catch(e){
			console.log(e);
			console.log(`${pathname}路由不存在`);
			response.write(pathname + '路由不存在');
		}
		response.end();
	}
}).listen(8000);
console.log('127.0.0.1:8000');
