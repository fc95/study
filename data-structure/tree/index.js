function Node(data) {
  this.data = data
  this.parent = null
  this.children = []
}

function Tree(data) {
  var node = new Node(data)
  this._root = node
}

/*
creates this tree
 
 one
 ├── two
 │   ├── five
 │   └── six
 ├── three
 └── four
     └── seven
*/
/*
         one
   two   three  four
five  six       seven
 */
// 深度遍历 DFS
if (!Array.prototype.top) {
  Array.prototype.top = function() {
    let lastIndex = this.length - 1
    return this[lastIndex]
  }
}
/*
  five
  six
  two
  three
  seven
  four
  one
 */
Tree.prototype.traverseDF = function(callback) {
  // (function rescure(currentNode) {
  //   for (var i = 0, len = currentNode.children.length; i < len; i++) {
  //     rescure(currentNode.children[i])
  //   }
  //   callback(currentNode)
  // })(this._root)

  // var stack = []
  // stack.push(this._root)
  // while(stack.length) {
  //   const top = stack.pop()
  //   // for (var i = 0, length = top.children.length; i < length; i++) {
  //   //   stack.push(top.children[i])
  //   // }
  //   for (var length = top.children.length - 1, i = length; i >= 0; i--) {
  //     stack.push(top.children[i])
  //   }
  //   callback(top)
  // }

  var stack = []
  stack.push(this._root)
  var currentNode = stack.pop()
  while(currentNode) {
    for (var i = 0, length = currentNode.children.length; i < length; i++) {
      stack.push(currentNode.children[i])
    }
    // for (var length = currentNode.children.length - 1, i = length; i >= 0; i--) {
    //   stack.push(currentNode.children[i])
    // }
    callback(currentNode)
    currentNode = stack.pop()
  }
}
// 广度遍历 BFS
Tree.prototype.traverseBF = function(callback) {
  // var queue = new Queue()
  // queue.enqueue(this._root)
  // currentTree = queue.dequeue()
  var queue = []
  queue.push(this._root)
  var currentTree = queue.shift()
  while(currentTree){
    for (var i = 0, length = currentTree.children.length; i < length; i++) {
        // queue.enqueue(currentTree.children[i]);
        queue.push(currentTree.children[i])
    }
    callback(currentTree);
    // currentTree = queue.dequeue();
    currentTree = queue.shift()
  }
}
//contains(data, traversal)
// add(child, parent)
// remove(node, parent)
 
var tree = new Tree('one');
 
tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;
 
tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;
 
tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];
 
tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

/*
  tree
  
  one (depth: 0)
  ├── two (depth: 1)
  │   ├── five (depth: 2)
  │   └── six (depth: 2)
  ├── three (depth: 1)
  └── four (depth: 1)
      └── seven (depth: 2)
 */
tree.traverseDF(function(node) {
  console.log(node.data)
})
console.log('=======================')
tree.traverseBF(function(node) {
  console.log(node.data)
});