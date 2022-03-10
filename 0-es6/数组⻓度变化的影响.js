// 数组的length属性不是只读的，可以修改
let players = ["curry", "james", "kobe"];
// 原始长度是3，将数组长度修改为2，相当于删除了未尾的一项。因此可以使用该属性完成数组未尾数据删除功能
players.length = 2;
console.log(players[2]);  // 数组下标是2（第三项，0开始），打印结果是undefined

// 超过数组⻓度赋值的影响
let players = ["curry", "james", "kobe"];  // 创建带有3个初始化项的数组
players[7] = "jordan";  // 设置数组中第8项
console.log(players. length);  // 输出结果为8
console.log(players[5]);  // undefined

//  如何检测⼀个数组的类型
console.log(Array.isArray(players));  // true, Es5方法,推荐使用
console.log(players instanceof Array);  // true,多个js前端框架共用环境下可能有问题

// 数组转字符串
let players = ["curry","james","kobe"];  // 创建带有三个初始化项的数组
console.log(players.tostring());  // curry, james, kobe.默认使用逗号分隔
console.log(players.toLocalestring());  // curry, james, kobe
console.log(players.join("&"));  // currysjames&kobe,如果想自定义分隔符号使用join