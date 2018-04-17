//只支持一個函數
const User = require('./User');
function Teacher(id , name ,age){
	User.apply(this,[id ,name ,age]);
	this.teach = function(res){
		res.write(this.name + '教学');
	}
}
module.exports = Teacher ; 

