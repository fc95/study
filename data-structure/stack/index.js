/**
 * Created by 胡林云 on 2017/6/25.
 */
/*
export class Stack(){

  constructor(items){
    this.items = items || [] ;
  }

  push(element){
    this.items.push(element);
  }

  pop(){
    this.items.pop();
  }

  peek(){
    return this.items[this.items.length-1];
  }

  size(){
    return this.items.length;
  }

  clear(){
    this.items = [];
  }

  isEmpty(){
    return !this.items.length;
  }

  print(){
    console.log(this.items.toString());
  }
}*/
function Stack(items){
  this.items = items || [];
}

Stack.prototype.push = function(element){
  this.items.push(element);
  return this;
};

Stack.prototype.pop = function(){
  this.items.pop();
  return this;
};

Stack.prototype.peek = function(){
  return this.items[this.items.length - 1];
};

Stack.prototype.size = function(){
  return this.items.length;
};

Stack.prototype.clear = function(){
  this.items = [];
};

Stack.prototype.isEmpty = function(){
  return !this.items.length;
};

Stack.prototype.print = function(){
  console.log(this.items.toString());
};