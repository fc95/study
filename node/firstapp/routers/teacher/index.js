/**
 * Created by 胡林云 on 2017/5/31.
 */
var express = require('express');
var router = express.Router();

var teacherList = [{
  id : 1 , name : 'T00000' , age : '28'
},{
  id : 2 , name : 'T00001' , age : '39'
},{
  id : 3 , name : 'T00002' , age : '27'
},{
  id : 4 , name : 'T00003' , age : '18'
}];

router.get('/list', function(req, res) {
  res.send({ flag: 1 , data : teacherList , message : '' });
});

router.get('/:id', function (req, res) {
  var id = Number(req.params.id) ,
    teacher = teacherList.filter(function (item) {return id === item.id});
  res.send({ flag: 1 , data : teacher , message : '' });
});

module.exports = router;