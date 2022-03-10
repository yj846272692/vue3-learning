// 基本数据类型排序
let values = [1, 2, 5, 10, 19];
values.reverse();  // 数组倒序方法
console.log(values.tostring());  // 数组倒序:19,10,5,2,1
values.sort();  // 数组排序方法
console.log(values.tostring());  // 数组正向排序:1,10,19,2,5

function compare(value1, value2) {
    //定义比较规则的函数
    return value1 - value2;  // 返回值三种可能,0,大于o,小于o
}
values.sort(compare);  // 使用比较规则
console.log(values.tostring());  // 排序结果:1,2,5,10,19


// 比较对象
let players = [{ name: " james", age: 36 },
{ name: "curry", age: 31 },
{ name: "kobe", age: 39 }];
function comparePlayer(player1, player2) {
    return player1.age - player2.age;
}
players.sort(comparePlayer);
console.log(players);