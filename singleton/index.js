// 单体模式
var Singleton = function (name) {
  this.name = name;
};
Singleton.prototype.getName = function () {
  return this.name;
}
// 获取实例对象
var getInstance = (function () {
  var instance = null;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  }
})();
// 测试单体模式的实例
var a = getInstance("aa"); // 只会生成一次
var b = getInstance("bb"); // 只会生成一次

console.log(a === b); // true
console.log(a.getName());// aa
console.log(b.getName());// aa

