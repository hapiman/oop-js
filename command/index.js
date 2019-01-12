var b1 = document.getElementById("button1"),
  b2 = document.getElementById("button2"),
  b3 = document.getElementById("button3");

// 定义setCommand 函数，该函数负责往按钮上面安装命令。点击按钮后会执行command对象的execute()方法。
var setCommand = function (button, command) {
  button.onclick = function () {
    command.execute();
  }
};
// 下面我们自己来定义各个对象来完成自己的业务操作
var MenuBar = {
  refersh: function () {
    alert("刷新菜单目录");
  }
};
var SubMenu = {
  add: function () {
    alert("增加子菜单");
  },
  del: function () {
    alert("删除子菜单");
  }
};
// 下面是编写命令类
var RefreshMenuBarCommand = function (receiver) {
  this.receiver = receiver;
};
RefreshMenuBarCommand.prototype.execute = function () {
  this.receiver.refersh();
}
// 增加命令操作
var AddSubMenuCommand = function (receiver) {
  this.receiver = receiver;
};
AddSubMenuCommand.prototype.execute = function () {
  this.receiver.add();
}
// 删除命令操作
var DelSubMenuCommand = function (receiver) {
  this.receiver = receiver;
};
DelSubMenuCommand.prototype.execute = function () {
  this.receiver.del();
}
// 最后把命令接收者传入到command对象中，并且把command对象安装到button上面
var refershBtn = new RefreshMenuBarCommand(MenuBar);
var addBtn = new AddSubMenuCommand(SubMenu);
var delBtn = new DelSubMenuCommand(SubMenu);

setCommand(b1, refershBtn);
setCommand(b2, addBtn);
setCommand(b3, delBtn);
