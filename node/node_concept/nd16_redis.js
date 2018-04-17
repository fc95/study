/**
 * Created by 胡林云 on 2017/4/10.
 */
const RDS_PORT = 6379; // 端口号
const	RDS_HOST = 'localhost';// 服务器IP127.0.0.1
const RDS_PWD = '';
const	RDS_OPTS = { // 设置项

	// 密码
	auth_pass: RDS_PWD, 

	/* 默认值为false,当连接到一台redis服务器时，服务器也许正在从磁盘中加载数据库，
	当正在加载阶段，redis服务器不会响应任何命令，node_redis会发送一个“准备确认”的INFO命令，
　 INFO命令得到响应表示此时服务器可以提供服务，这时node_redis会触发"ready"事件，
	如果该设置项设置为true，则不会有这种检查 */
	no_ready_check: false,
}; 

var redis = require('redis'),
		client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

client.on('connect', err => {
	if (err) throw new Error('连接异常');
	console.log('redis 服务已经连接')
	client.exists('version', (err, res) => {
		if (err) throw new Error('获取key => version异常');
		// res 0代表不存在，1代表存在
		if (res) {
			client.get('version', (err, res) => {
				if (err) throw new Error('获取 version 值');
				// res 
				console.log('key => version对应的值是：' + res);
			})
		} else {
			console.log('key => version不存在');
			client.set('version', '0.0.0', (err, res) => {
				// res ok代表成功
				if (err) throw new Error('设置 version 异常');
				console.log('设置 version 成功');
			})
		}
	})
})

client.on('ready', err => {
	if (err) throw new Error('启动异常');
	console.log('redis 服务已经启动')
})

/* client.keys('*' , (err, keys) => {
	if (err) throw new Error('获取keys异常');
	console.log(keys);
}) */

/* client.set('version', '0.0.0',redis.print);
client.get('version', redis.print); */

client.on('error', err => {
  console.log('Error ' + err)
})

console.log(client.connection_options);