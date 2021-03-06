var event = {
  list: [],
  listen: function(key,fn) {
      if(!this.list[key]) {
          this.list[key] = [];
      }
      // 订阅的消息添加到缓存列表中
      this.list[key].push(fn);
  },
  trigger: function(){
      var key = Array.prototype.shift.call(arguments);
      var fns = this.list[key];
      // 如果没有订阅过该消息的话，则返回
      if(!fns || fns.length === 0) {
          return;
      }
      for(var i = 0,fn; fn = fns[i++];) {
          fn.apply(this,arguments);
      }
  }
};


event.remove = function(key,fn){
    var fns = this.list[key];
    // 如果key对应的消息没有订阅过的话，则返回
    if(!fns) {
        return false;
    }
    // 如果没有传入具体的回调函数，表示需要取消key对应消息的所有订阅
    if(!fn) {
        fn && (fns.length = 0);
    }else {
        for(var i = fns.length - 1; i >= 0; i--) {
            var _fn = fns[i];
            if(_fn === fn) {
                fns.splice(i,1); // 删除订阅者的回调函数
            }
        }
    }
};
// 测试代码如下：
var initEvent = function(obj) {
    for(var i in event) {
        obj[i] = event[i];
    }
};
var shoeObj = {};
initEvent(shoeObj);

// 小红订阅如下消息
shoeObj.listen('red',fn1 = function(size){
    console.log("尺码是："+size);
});

// 小花订阅如下消息
shoeObj.listen('red',fn2 = function(size){
    console.log("再次打印尺码是："+size);
});
shoeObj.trigger("red",41);
shoeObj.remove("red",fn);
shoeObj.trigger("red",42);
