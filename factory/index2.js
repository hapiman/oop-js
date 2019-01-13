/**
 * 复杂工厂模式
 * 父类是通用解决方案，子类可实例化父类，可以重写父类中接口，实现定制化需求
 */

//工厂构造函数
function Factory(name) {
  this.name = name;
  this.say = function () {
    return this.name;
  }
}
Factory.prototype = {
  constructor: Factory,
  createFactory: function () {
    throw new Error('父类抽象类无法直接调用，需要子类重写');
  }
}

//原型继承
function extend(sub, sup) {
  //定义空函数
  let F = function () { };
  //空函数原型为父类原型
  F.prototype = sup.prototype;
  //实例化空函数传递给子类原型
  sub.prototype = new F();
  //使子类构造器指向自身
  sub.prototype.constructor = sub;
  //保存父类原型
  sub.sup = sup.prototyp;
  //检测父类原型为父类自身
  if (sup.prototype.constructor === Object.prototype.constructor) {
    sup.prototype.constructor = sup;
  }
}

function Person(name) {
  this.name = name;
  Factory.call(this, name);
}

extend(Person, Factory);

Person.prototype.createFactory = function () {
  switch (this.name) {
    case 'Tom': return { name: 'Tom', age: 10, sex: 'male' };
    case 'Jerry': return { name: 'Jerry', age: 20, sex: 'female' };
    default: return {};
  }
}

let Tom = new Person('Tom');
let tom1 = Tom.createFactory();
