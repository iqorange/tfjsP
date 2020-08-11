/**
 * 数组
 */
// 前增
let  arr = [1]
arr.unshift(2);
console.log(arr);

// 后增
arr.push(3);
console.log(arr);

// 前删
arr.shift();
console.log(arr);

// 后删
arr.pop();
console.log(arr);

// 截取
arr = [1,2,3,4];
arr.splice(0,1); // [1]  代表从0开始删除一个元素
console.log(arr); // [2，3，4]
arr.splice(1,2,9); // [2,3] 从索引1开始删除两个元素并替换成9
console.log(arr); // [1.9.4]
arr.splice(3,0,10); // [] 从索引3开始，不删除元素，并添加元素10
console.log(arr); // [1，2，3，4，10]

// 拼接
let arr1 = [1,2];
let arr2 = [3,4];
arr1.push(arr2);
console.log(arr1); // [1,2,[3,4]]

arr1 = [1,2];
arr2 = [3,4];
arr3 = arr1.concat(arr2);
console.log(arr3) // [1,2,3,4]

// 查找
arr = [1,2,3,1,5];
let index = arr.indexOf(1);
console.log(index); // 0

arr = [1,2,3,2,1,2];
index = arr.lastIndexOf(1);
console.log(index); // 4

// 排序
arr = [5,7,3,9,1,6];
arr.sort();// [1,3,5,6,7,9]
console.log(arr);

// 倒序
arr.reverse();
console.log(arr);

// 转换
arr = [1,2];
let str = arr.toString();
console.log(str); // "1,2"

arr = [1,2,3];
let str1 = arr.join(".");
console.log(str1); //"1.2.3"
let str2 = arr.join("$");
console.log(str2); //"1$2$3"

// 会使用默认排序方式。先调用每个元素的toString() 方法，然后按照转换后字符串的 Unicode 编码来进行排序
console.log( [1, 2, 3, 15, 22, 33].sort());

function compare(value1, value2) {
    return value1 < value2 ? 1 : -1;
}

console.log( [1, 2, 3, 15, 22, 33].sort(compare));


let a = [1,1,2,2,3]
function searchOnly(){
    return a.reduce((prev,next) => prev ^ next)
}

console.log(searchOnly(a));
