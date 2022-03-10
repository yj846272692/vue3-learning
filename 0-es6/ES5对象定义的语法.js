function Player(name, age) {
    this.name = name;
    this.age = age;
}

// 定义对象的成员函数 toPrint
Player.prototype.toPrint = function() {
    console.log(this.name + "-------" + this.age);
}

var player1 = new Player("Tom", 80);
var player2 = new Player("Jack",77);

// 调用成员函数
player1.toPrint();
player2.toPrint();