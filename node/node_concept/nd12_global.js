/**
 * Created by 胡林云 on 2017/4/10.
 */
console.log(process);
//console.log(global.process);
/*console.log('127.0.0.1:8000');
var num1, num2;
//2：向屏幕输出，提示信息，要求输入num1
process.stdout.write('请输入num1的值：');
//3：监听用户的输入
process.stdin.on('data', function (chunk) {
    if (!num1) {
        num1 = Number(chunk);
        //4：向屏幕输出，提示信息，要求输入num2
        process.stdout.write('请输入num2的值：');
    } else {
        num2 = Number(chunk);
        process.stdout.write('结果是：' + (num1 + num2));
    }
});*/
process.on('uncaughtException', function (err) {
　　console.log('Caught exception: ' + err);
});
setTimeout(function () {
　　console.log('This will still run.');
}, 500);
// Intentionally cause an exception, but don't catch it.
//nonexistentFunc();
//console.log('This will not run.');