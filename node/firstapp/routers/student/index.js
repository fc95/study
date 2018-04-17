/**
 * Created by 胡林云 on 2017/5/31.
 */
var express = require('express');
var router = express.Router();
var query = require('../../config/mysql');

router.get('/list', function(req, res) {
  function callback(result) {
    res.send({ flag: 1 , data : result , message : '' });
  }
  query('select * from employee' , null , callback);
});

router.post('/add', function(req, res) {
  var { ename , ephone } = req.body ;
  function callback(result){
    if( result.insertId ){
      res.send({ flag: 1 , data : null , message : '添加学生成功' });
    }else{
      res.send({ flag: 0 , data : null , message : '添加学生失败' });
    }
  }
  query('insert into employee(ename , ephone) values(? , ?)' , [ename , ephone] ,callback);
});

router.get('/search', function(req, res) {
  console.log(req.query);
  var { ename } = req.query ;
  function callback(result){
    console.log(result);
    res.send({ flag: 1 , data : result , message : '' });
  }
  query('select * from employee where ename = ? ' , [ename] ,callback);
});

router.get('/:id', function (req, res) {
  console.log(req.params);
  var id = Number(req.params.id);
  if(isNaN(id)){
    id = 1;
  }
  function callback(result) {
    res.send({ flag: 1 , data : result , message : '' });
  }
  query(`SELECT * from employee where id = ${id}`, null ,callback);
});

module.exports = router;