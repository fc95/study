//支持多個函數
const fs =  require('fs');
module.exports = {
	readfileSync :function(path){ //同步读取
		let data = fs.readFileSync(path ,'utf-8');
		console.log('同步读取文件执行完毕');
	},
	//readfile :function(path ,res){ //异步读取
	readfile :function(path ,callback){ //异步读取
		fs.readFile(path ,function(err ,data){
			if(err){
				console.log(err);
			}else{
				//res.write(data); //报错  异步end结束了 在write出错
				callback(data);
			}
		});
		console.log('异步读取文件执行完毕');
	},
  readImg :function(path ,res){
    fs.readFile(path , 'binary' ,function(err ,file){
      if(err){
        console.log(err);
        return;
      }else{
        console.log('输出文件');
        res.write(file , 'binary');
        res.end();
      }
    });
  },
  writefileSync :function(path ,data){ //同步写
    fs.writeFileSync(path ,data);
    console.log('同步写文件执行完毕');
  },
  writefile :function(path ,data ,callback){ //异步读取
    fs.writeFile(path ,data ,function(err){
      if(err){
        throw err;
      }
      console.log('异步写文件执行完毕');
      callback('It`s saved');
    });
  },
}
	

//只支持一個函數
/*function fun2(res){
	console.log('fun2');
	res.write('hello 我是fun2');
}
module.exports = fun2 ;*/ 

