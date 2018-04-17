/**
 * Created by 胡林云 on 2017/9/21.
 */
var mysql = require('mysql');

function query (sql , params , callback){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'info_manage'
  });

  connection.connect();
  //查询
  /**
   * rows具体数据集合，fields数据表字段属性的集合
   */
  connection.query(sql, params, function(err, rows, fields) {
    if (err) throw err;
    callback(rows);
  });
  //关闭连接
  connection.end();
};

module.exports = query;