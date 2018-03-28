// 属性的简洁写法
var name = 'xxx';
var age = 12;
var person = {name, age}

// 为对象添加属性
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y});
  }
}

// 为对象添加方法
class SomeClass {

}
Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2) {
  },
  anotherMethod() {
  }
});

// 属性的可枚举性和遍历
  // 可枚举性
  // 对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。
  // Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。
  var obj = { foo: 123 };
  Object.getOwnPropertyDescriptor(obj, 'foo')
  //  {
  //    value: 123,
  //    writable: true,
  //    enumerable: true,
  //    configurable: true
  //  }

  // 描述对象的enumerable属性，称为"可枚举性"，
    // 如果该属性为false，就表示某些操作会忽略当前属性。
    // 目前，有四个操作会忽略enumerable为false的属性。
    // for...in循环：只遍历对象自身的和继承的可枚举的属性。
    // Object.keys()：返回对象自身的所有可枚举的属性的键名。
    // JSON.stringify()：只串行化对象自身的可枚举的属性。
    // Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
    // 其中，只有for...in会返回继承的属性，其他三个方法都会忽略继承的属性，只处理对象自身的属性。

    Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable
    // false
    Object.getOwnPropertyDescriptor([], 'length').enumerable
    // false

  // 另外，ES6 规定，所有 Class 的原型的方法都是不可枚举的。

  // 遍历
    // （1）for...in
    // for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

    // （2）Object.keys(obj)
    // Object.keys返回一个数组，包括对象自身的（不含继承的）
    // 所有可枚举属性（不含 Symbol 属性）的键名。

    // （3）Object.getOwnPropertyNames(obj)
    // Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性
    // （不含 Symbol 属性，但是包括不可枚举属性）的键名。

    // （4）Object.getOwnPropertySymbols(obj)
    // Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

    // （5）Reflect.ownKeys(obj)
    // Reflect.ownKeys返回一个数组，包含对象自身的所有键名，
    // 不管键名是 Symbol 或字符串，也不管是否可枚举。

    // 以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。
    //   首先遍历所有数值键，按照数值升序排列。
    //   其次遍历所有字符串键，按照加入时间升序排列。
    //   最后遍历所有 Symbol 键，按照加入时间升序排列。

    // Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
    // ['2', '10', 'b', 'a', Symbol()]