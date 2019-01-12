/**
 * 定策略
 */

var performanceA = function () { };
performanceA.prototype.calculate = function (salary) {
  return salary * 4;
};
var performanceB = function () { };
performanceB.prototype.calculate = function (salary) {
  return salary * 3;
};
var performanceC = function () { };
performanceC.prototype.calculate = function (salary) {
  return salary * 2;
};
// 奖金类
var Bouns = function () {
  this.salary = null;    // 原始工资
  this.levelObj = null;  // 绩效等级对应的策略对象
};
Bouns.prototype.setSalary = function (salary) {
  this.salary = salary;  // 保存员工的原始工资
};
Bouns.prototype.setlevelObj = function (levelObj) {
  this.levelObj = levelObj;  // 设置员工绩效等级对应的策略对象
};
// 取得奖金数
Bouns.prototype.getBouns = function () {
  // 把计算奖金的操作委托给对应的策略对象
  return this.levelObj.calculate(this.salary);
};
var bouns = new Bouns();
bouns.setSalary(10000);
bouns.setlevelObj(new performanceA()); // 设置策略对象
console.log(bouns.getBouns());  // 40000

bouns.setlevelObj(new performanceB()); // 设置策略对象
console.log(bouns.getBouns());  // 30000
