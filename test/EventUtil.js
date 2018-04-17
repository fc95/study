var EventUtil = {
  addHandler:function(element ,type ,handler){
    //添加事件处理
    if(element.addEventListener){
      //检测是否存在DOM2
      element.addEventListener(type ,handler ,false);
    }else if(element.attachEvent){
      //存在ie
      element.attachEvent('on'+type ,handler);
    }else{
      //DOM0
      element['on'+type] = handler;
    }
  },
  removeHandler:function(element ,type ,handler){
    //移除事件处理
    if(element.removeEventListener){
      //检测是否存在DOM2
      element.removeEventListener(type ,handler ,false);
    }else if(element.detachEvent){
      //存在ie
      element.detachEvent('on'+type ,handler);
    }else{
      //DOM0
      element['on'+type] = null;
    }
  },
  getEvent:function(event){
    //事件对象
    return event ? event : window.event;
  },
  getTarget:function(event){
    //事件目标
    return event.target || event.srcElement;
  },
  preventDefault:function(event){
    //取消事件默认行为
    if(event.preventDefault){
      event.preventDefault();
    }else{
      event.returnValue = false;
    }
  },
  stopPropagation:function(event){
    //取消事件进一步冒泡或捕获
    if(event.stopPropagation){
      event.stopPropagation();
    }else{
      event.cancelBubble = true;
    }
  }
}