function Fn1() {
  console.log(1);
  return "nextSuccessor";
}
function Fn2() {
  console.log(2);
  var self = this;
  setTimeout(function(){
      self.next();
  },1000);
}
function Fn3() {
  console.log(3);
}
// 下面需要编写职责链模式的封装构造函数方法
var Chain = function(fn){
  this.fn = fn;
  this.successor = null;
};
Chain.prototype.setNextSuccessor = function(successor){
  return this.successor = successor;
}
// 把请求往下传递
Chain.prototype.passRequest = function(){
  var ret = this.fn.apply(this,arguments);
  if(ret === 'nextSuccessor') {
      return this.successor && this.successor.passRequest.apply(this.successor,arguments);
  }
  return ret;
}
Chain.prototype.next = function(){
  return this.successor && this.successor.passRequest.apply(this.successor,arguments);
}
//现在我们把3个函数分别包装成职责链节点：
var chainFn1 = new Chain(Fn1);
var chainFn2 = new Chain(Fn2);
var chainFn3 = new Chain(Fn3);

// 然后指定节点在职责链中的顺序
chainFn1.setNextSuccessor(chainFn2);
chainFn2.setNextSuccessor(chainFn3);

chainFn1.passRequest();  // 打印出1，2 过1秒后 会打印出3
