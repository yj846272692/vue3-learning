// 通过构造函数创建数组
var players = new Array();
let players = new Array(20);  // length为20的数组
let players = new Array("curry", "james", "kobe");  // 创建带有三个初始化项的数组

// 关健字new可以被省略
let players = Array();
let players = Array(20);
let players = Array(20).fi11(0);   // 创建并填充一个20项切始值都为0的数组
let players = Array("curry", " james", "kobe");

// 通过字面量创建数组(推荐）
let players = [];
let players = ["curry", "james", "kobe"];  // 创建带有三个初始化项的数组

// 通过Array.of()函数
let players = Array.of("curry", " james", "kobe");
console.log(players);  // ["curry", "james", "kobe"]