// 扩展运算符的应用
// 结构
var [first, ...rest] = [1,3,4,5,6]; // first => 1, rest => [3,4,5,6]
// 合并对象
var totalArr = [...[1], 4, ...[3,4]];

// 实现一个长度100内容填充1-100数字的方法
[...new Array(100)].map((item, i) => i + 1);
Array.from(new Array(100), (item, i) => i + 1);
Array.from({length: 100}, (item, i) => i + 1);

// 新增新的方法：find，findIndex，fill，entries，keys，values，includes

// 注意数组的空位