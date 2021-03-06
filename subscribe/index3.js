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

var initEvent = function(obj) {
  for(var i in event) {
      obj[i] = event[i];
  }
};
// 我们再来测试下，我们还是给shoeObj这个对象添加发布-订阅功能；
var shoeObj = {};
initEvent(shoeObj);

// 小红订阅如下消息
shoeObj.listen('red',function(size){
  console.log("尺码是："+size);
});

// 小花订阅如下消息
shoeObj.listen('block',function(size){
  console.log("再次打印尺码是："+size);
});
shoeObj.trigger("red",40);
shoeObj.trigger("block",42);
