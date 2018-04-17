const firstSet = new Set();

// Set.prototype.constructor：构造函数，默认就是Set函数。
// Set.prototype.size：返回Set实例的成员总数。
// size 大小/长度
firstSet.size
// add(value)：添加某个值，返回 Set 结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值

// add 添加
firstSet.add(3)
// has
firstSet.has(3)
// delete
firstSet.delete(3)
firstSet.has(3)
firstSet.clear()

function dedupe (arr) {
  // return [...new Set(arr)]
  return Array.from(new Set(arr))
}
dedupe([1,2,3,4,4,4])

let arr1 = [1, 3, 4]
let arr2 = [2, 4, 1]

// 并集
function union (arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]))
}

// 交集
function intersect (arr1, arr2) {
  // return arr1.filter(v => new Set(arr2).has(v))
  return arr1.filter(v => arr2.includes(v))
}

// 差集
function difference (arr1, arr2) {
  // return arr1.filter(v => !new Set(arr2).has(v))
  return arr1.filter(v => !arr2.includes(v))
}