const http = require('http');
const https = require('https');
http.createServer(function(request ,response){
	response.writeHead(200 ,{'Content-Type':'text/html;  charset=utf-8'});
	console.log(request.url);  //第一次==》'/' ,第二次==》'/favicon.ico'
	if(request.url !=='/favicon.ico'){ //清除第二次访问
		console.log('访问');
    https.get('https://rate.tmall.com/list_detail_rate.htm?itemId=44236805503&spuId=323487692&sellerId=631228908&order=3&currentPage=2',function(res){
      var html='';
      console.log('-------------开始爬虫------------');
      console.log('statusCode:', res.statusCode);
      //console.log('headers:', res.headers);
      res.on('data',function(data){
        console.log('-------------获取数据------------');
      	console.log(data);
      	console.log(data.toString());
        //html+=data;
      });
      res.on('end',function(){
        //console.info(html);
        response.write('hello world');
        response.end();
      });
    });
    //response.write('hello,world');
		//response.end();
	}
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');

