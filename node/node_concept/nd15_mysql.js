/**
 * Created by 胡林云 on 2017/4/10.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '192:168:56:100',
    user: 'root',
    password: 'admin',
    database:'mysql'
});

connection.connect();
//查询
/**
 * rows具体数据集合，fields数据表字段属性的集合
 */ 
connection.query('SELECT * from user', function(err, rows, fields) {
	console.log(err);
    if (err) throw err;
    for(let i in rows[0]){
		console.log(`${i}=${rows[0][i]}`);
	}
});
//关闭连接
connection.end();