
let players = [
    { name: "james", age: 36, champions: 3 },
    { name: "curry", age: 31, champions: 3 },
    { name: "kobe", age: 39, champions: 5 }];
players.forEach(function (value, index, array) {
    // 这个方法没有返回值,可以在这里执行一些操作,比如渲染一个table
    console.log(`<tr>$ { value.name }</tr>`);  // 这里使用了BS6语法,避免字符串拼接
});
