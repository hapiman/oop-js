
/**
 * 根据消息类型，调用对应的方法
 */
var shoeObj = {}
shoeObj.list = []


shoeObj.listen = function (key, fn) {
  if (!this.list[key]) {
    this.list[key] = []
  }
  this.list[key].push(fn)
}


shoeObj.trigger = function () {
  var key = Array.prototype.shift.call(arguments)
  var fns = this.list[key]
  if (!fns || fns.length === 0) {
    return
  }
  for (var i = 0, fn; fn = fns[i++];) {
    fn.apply(this, arguments)
  }
}


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
