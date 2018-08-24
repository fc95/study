/**
 * Created by 胡林云 on 2017/6/26.
 */
function Queue(items){
  this.items = items || [];
}

Queue.prototype.enqueue = function(element){
  this.items.push(element);
  return this;
};

/**
 * @returns {Queue}
 * 优先队列
 */
Queue.prototype.prienqueue = function(element , priority){
  const queueElement = { element , priority };
  if(this.isEmpty()){
    this.items.push(queueElement);
  }else{
    const preIndex = this.items.findIndex( v => queueElement.priority < v.priority);
    if( preIndex > -1){
      this.items.splice(preIndex , 0 , queueElement)
    }else{
      this.items.push(queueElement);
    }
  }
  return this;
};


Queue.prototype.dequeue = function(){
  this.items.shift();
  return this;
};

Queue.prototype.front = function(){
  return this.items[0];
};

Queue.prototype.size = function(){
  return this.items.length;
};

Queue.prototype.clear = function(){
  this.items = [];
};

Queue.prototype.isEmpty = function(){
  return !this.items.length;
};

Queue.prototype.print = function(){
  console.log(this.items.toString());
};

/**
 * @returns {Queue}
 * 循环队列
 */
Queue.prototype.getIndex = function(index){
  const len = this.items.length;
  return index > len ? (index % len) : index ;
};

Queue.prototype.find = function(index){
  return !this.isEmpty() ? this.items[this.getIndex(index)] : null ;
};