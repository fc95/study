//支持多個函數
module.exports = {
	fun2 :function(res){
		console.log('fun2');
		res.write('hello 我是fun2');
	},
	fun3 :function(res){
		console.log('fun3');
		res.write('hello 我是fun3');
	}
}
	

//只支持一個函數
/*function fun2(res){
	console.log('fun2');
	res.write('hello 我是fun2');
}
module.exports = fun2 ;*/ 

