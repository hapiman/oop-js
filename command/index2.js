var setCommand = function(button,func) {
  button.onclick = function(){
      func();
  }
};
var MenuBar = {
  refersh: function(){
      alert("刷新菜单界面");
  }
};
var SubMenu = {
  add: function(){
      alert("增加菜单");
  }
};
// 刷新菜单
var RefreshMenuBarCommand = function(receiver) {
  return function(){
      receiver.refersh();
  };
};
// 增加菜单
var AddSubMenuCommand = function(receiver) {
  return function(){
      receiver.add();
  };
};
var refershMenuBarCommand = RefreshMenuBarCommand(MenuBar);
// 增加菜单
var addSubMenuCommand = AddSubMenuCommand(SubMenu);
setCommand(b1,refershMenuBarCommand);

setCommand(b2,addSubMenuCommand);
