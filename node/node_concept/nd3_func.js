const http = require('http');
const User = require('./models/User');
const Teacher = require('./models/Teacher');
http.createServer(function(request ,response){
	response.writeHead(200 ,{'Content-Type':'text/html;  charset=utf-8'});
	if(request.url !=='/favicon.ico'){
		/*let user = new User();
		user.id = 1 ;
		user.name = '张三' ;
		user.age = 20 ;*/
		let teacher = new Teacher(2,'王天哥',29);
		teacher.enter();
		teacher.teach(response);
		response.end();
	}
}).listen(8000);
console.log('127.0.0.1:8000');
