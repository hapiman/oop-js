/**
 *简洁模式, 解决重复实例化对象的问题
 */
function Factory(name, age, sex) {
  let person = {};
  person.name = name;
  person.age = age;
  person.sex = sex;
  person.say = function () {
    return this.name;
  };
  return person;
}

let tom = new Factory('Tom', '10', 'male');
let jerry = new Factory('Jerry', '20', 'female');

