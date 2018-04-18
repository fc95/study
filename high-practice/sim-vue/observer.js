function defineReactive(data, key, val) {
  observe(val) // 遍历递归所有子属性
  var dep = new Dep()
  console.log('====== dep =====>', dep)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      if (Dep.target) {
        dep.addSub(Dep.target)
        console.log('====== dep1 =====>', dep)
      }
      return val
    },
    set: function(newVal) {
      if (val === newVal) {
        return
      }
      val = newVal
      // console.log('属性' + key + '已经被监听了，现在值为：“' + newVal.toString() + '”');
      dep.notify()
    }
  })
}

function observe(data) {
  if (!data || typeof data !== 'object') {
    return
  }
  Object.keys(data).forEach(function(key) {
    defineReactive(data, key, data[key])
  })
}

// var library = {
//   book1: {
//     name: ''
//   },
//   book2: ''
// }
// observe(library)
// console.log(library)
// library.book1.name = 'vue权威指南'; // 属性name已经被监听了，现在值为：“vue权威指南”
// library.book2 = '没有此书籍';  // 属性book2已经被监听了，现在值为：“没有此书籍”
function Dep() {
  this.subs = []
}

Dep.target = null

Dep.prototype = {
  addSub: function(sub) {
    this.subs.push(sub)
  },
  notify: function() {
    this.subs.forEach(function(sub) {
      sub.update()
    })
  }
}