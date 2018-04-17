/**
 * Created by 胡林云 on 2017/4/10.
 */
const fs =  require('fs');

let data = JSON.parse(fs.readFileSync('./../test.txt' ,'utf-8'));

/*fs.readFile('./../npm-debug.log' , 'utf-8' ,function(err ,data){
	if(err){
		console.log(err);
	}else{
		//res.write(data); //报错  异步end结束了 在write出错
		console.log(data);
	}
});*/

/*if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
        bin = bin.slice(3);
    }*/
data.name = '小红3';
console.log(JSON.stringify(data));
console.log('异步读取文件执行完毕');
fs.writeFileSync('./../test.txt' ,JSON.stringify(data) ,'utf-8');
//console.log(data);
//console.log('同步读取文件执行完毕');