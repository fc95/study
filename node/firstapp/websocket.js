/**
 * Created by 胡林云 on 2017/10/25.
 */
const ws = require("nodejs-websocket");
// const querystring = require("querystring");
console.log("开始建立连接...");

var result = [

];

var server = ws.createServer(function(conn){

  // console.log(conn.headers['x-forwarded-for']);
  // console.log(conn.socket.remoteAddress);
  // console.log("远程IP:" + conn.socket.remoteAddress.replace('::ffff:',''));

  // let path = conn.path ;
  // const params = querystring.parse(path.slice(path.indexOf("?") + 1));
  // console.log(`店名是:${params.pid},桌号:${params.did}`);

  // let number = parseInt(Math.random() * 100000);
  //conn.sendText(`欢迎${conn.socket.remoteAddress.replace('::ffff:','')}同学到${params.pid}点餐，当前桌号是${params.did}`);

  server.connections.forEach(function(con){
    con.sendText(JSON.stringify(result));
  });

  console.log("当前socket连接数是：" + server.connections.length);

  conn.on("text", function (good) {
    // console.log(good);

    good = JSON.parse(good);
    let isAddOpe = true;
    if(result.length === 0){
      result.push(good);
    }else{
      let goodIsExit = false;
      for(let i = 0,len = result.length; i<len; i++){
        if(result[i].id === good.id){
          goodIsExit = true;
          if(result[i].count > good.count){
            isAddOpe = false;
          }
          result[i] = good;
          break;
        }
      }
      if(!goodIsExit){
        result.push(good);
      }
    }

    server.connections.forEach(function(con){
      con.sendText(JSON.stringify(result));
    });
    // console.log(conn.socket.remoteAddress.replace('::ffff:',''));
    server.connections.forEach(function(con){
      // console.log(con.socket.remoteAddress.replace('::ffff:',''));
      if(conn.socket.remoteAddress !== con.socket.remoteAddress){
        con.sendText(`${conn.socket.remoteAddress.replace('::ffff:','')}同学${isAddOpe ? '添加':'減少'}了一份${good.id}`);
      }
    });

  });
  conn.on("close", function (code, reason) {
    console.log("关闭连接")
  });
  conn.on("error", function (code, reason) {
    console.log("异常关闭")
  });
}).listen(8001);
console.log("WebSocket建立完毕");