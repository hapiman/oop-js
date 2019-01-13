var players = []; // 定义一个数组 保存所有的玩家
function Hero(name, teamColor) {
  this.friends = [];    //保存队友列表
  this.enemies = [];    // 保存敌人列表
  this.state = 'live';  // 玩家状态
  this.name = name;     // 角色名字
  this.teamColor = teamColor; // 队伍的颜色
}
Hero.prototype.win = function () {
  // 赢了
  console.log("win:" + this.name);
};
Hero.prototype.lose = function () {
  // 输了
  console.log("lose:" + this.name);
};
Hero.prototype.die = function () {
  // 所有队友死亡情况 默认都是活着的
  var all_dead = true;
  this.state = 'dead'; // 设置玩家状态为死亡
  for (var i = 0, ilen = this.friends.length; i < ilen; i += 1) {
    // 遍历，如果还有一个队友没有死亡的话，则游戏还未结束
    if (this.friends[i].state !== 'dead') {
      all_dead = false;
      break;
    }
  }
  if (all_dead) {
    // 循环 通知所有的玩家 游戏失败
    for (var j = 0, jlen = this.friends.length; j < jlen; j += 1) {
      this.friends[j].lose();
    }
    this.lose();  // 队友全部死亡，游戏结束
    // 通知所有敌人游戏胜利
    for (var j = 0, jlen = this.enemies.length; j < jlen; j += 1) {
      this.enemies[j].win();
    }
  }
}
// 定义一个工厂类来创建玩家
var heroFactory = function (name, teamColor) {
  var newPlayer = new Hero(name, teamColor);
  for (var i = 0, ilen = players.length; i < ilen; i += 1) {
    // 如果是同一队的玩家
    if (players[i].teamColor === newPlayer.teamColor) {
      // 相互添加队友列表
      players[i].friends.push(newPlayer);
      newPlayer.friends.push(players[i]);
    } else {
      // 相互添加到敌人列表
      players[i].enemies.push(newPlayer);
      newPlayer.enemies.push(players[i]);
    }
  }
  players.push(newPlayer);
  return newPlayer;
};
// 红队
var p1 = heroFactory("aa", 'red'),
  p2 = heroFactory("bb", 'red'),
  p3 = heroFactory("cc", 'red'),
  p4 = heroFactory("dd", 'red');

// 蓝队
var p5 = heroFactory("ee", 'blue'),
  p6 = heroFactory("ff", 'blue'),
  p7 = heroFactory("gg", 'blue'),
  p8 = heroFactory("hh", 'blue');
// 让红队玩家全部死亡
p1.die();
p2.die();
p3.die();
p4.die();
// lose:dd lose:aa lose:bb lose:cc
// win:ee win:ff win:gg win:hh
