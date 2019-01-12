/**
 * 批量执行命令
 */

var command1 = {
  execute: function(){
      console.log(1);
  }
};
var command2 = {
  execute: function(){
      console.log(2);
  }
};
var command3 = {
  execute: function(){
      console.log(3);
  }
};
// 定义宏命令，command.add方法把子命令添加进宏命令对象，
// 当调用宏命令对象的execute方法时，会迭代这一组命令对象，
// 并且依次执行他们的execute方法。
var command = function(){
  return {
      commandsList: [],
      add: function(command){
          this.commandsList.push(command);
      },
      execute: function(){
          for(var i = 0,commands = this.commandsList.length; i < commands; i+=1) {
              this.commandsList[i].execute();
          }
      }
  }
};
// 初始化宏命令
var c = command();
c.add(command1);
c.add(command2);
c.add(command3);
c.execute();  // 1,2,3
