let players = ["curry", "james", "kobe", "james", "curry"];
//这两个方法在找不到数据时,返回-1
console.log(players.indexof("james"));  // 1,从数组头部查找数据返回下标位管
console.log(players.lastIndexof("james"));  // 3,从数组未居查找数据返回下标位置
// 查找符合条件的第一个数组成员,找不到返回undefined
let findOne = players.find(function (value, index, arr) {
    return value.includes("cu");
});
console.log(findOne);  // curry, curry包含cu
// 查找符合条件的第一个数组成员下标,找不到返回-1
let findOneIndex = players.findIndex(function (value, index, arr) {
    return value.includes("cu")
});
console.log(findOneIndex); // 0,curry包含cu,第一个元素下桥是0.

// let findOne = players.find((value, index, arr) => value.includes("cu"));
// let findOne = players.find((value) => value.includes("cu"));  // 只传第一个参数