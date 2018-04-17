var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var studentRouter = require('./routers/student/index');
var teacherRouter = require('./routers/teacher/index');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//设置静态文件所在的根目录
app.use('/', express.static('public'));
app.use('/', express.static('html'));

//设置模板引擎
app.set('views', './views');
app.set('view engine', 'jade');

app.use('/teacher' , teacherRouter);
app.use('/student' , studentRouter);

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});