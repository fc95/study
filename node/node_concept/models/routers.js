//支持多個函數
const optfile = require('./optfile');
const url = require('url');
const querystring = require('querystring');
function getRecall(req ,res){
  res.writeHead(200 ,{'Content-Type':'text/html;  charset=utf-8'});
  function recall(data) {
    res.write(data);
    res.end();
  }
  return recall;
}
module.exports = {
	login :function(req , res){
	  //-------------get方式接受参数---------------
    /*let params = url.parse(req.url ,true).query ;
    console.log(params);
    if(params['name']){
      console.log(params['name']);
      console.log(params['pwd']);
    }*/
    //-------------post方式接受参数---------------
    var post = '' ;  //定义一个post变量，用于暂存请求体的信息
    req.on('data' ,function (chunk) {
      post += chunk ;
    });
    //---------注意异步-----------
    req.on('end' ,function () {
      post = querystring.parse(post);
      //console.log('收到参数' + post['name'] + '\n');
      //console.log('收到参数' + post['pwd'] + '\n');
      function recall(data) {
        let arr = ['name' , 'pwd'] , dataStr = data.toString() ;
        for(let i= 0 ,len = arr.length ; i<len ;i++){
          let re = new RegExp('{' + arr[i] + '}' , 'g') ;
          dataStr = dataStr.replace(re,post[arr[i]])
        }
        res.writeHead(200 ,{'Content-Type':'text/html;  charset=utf-8'});
        res.write(dataStr);
        res.end();
      }
      optfile.readfile('./views/login.html' , recall);
    });
    //let recall =  getRecall(req , res);
    //optfile.readfile('./views/login.html' , recall);
	},
	register :function(req , res){
    let recall =  getRecall(req , res);
    optfile.readfile('./views/register.html' , recall);
	},
  writefile : function(req ,res){
    function recall(data){
      res.write(data);
      res.end();
    }
    optfile.writefile('./views/test.txt' , '我和你心连心' ,recall);
  },
  showImg :function(resquest ,response){
    response.writeHead(200 ,{'Content-Type':'image/jpeg'});
    optfile.readImg('./imgs/flower.jpg' ,response);
  }
}
	

//只支持一個函數
/*function fun2(res){
	console.log('fun2');
	res.write('hello \u6211\u662Ffun2');
}
module.exports = fun2 ;*/ 

