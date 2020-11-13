// 可选参数只能放在最后，函数本身也是一种类型，可以类型推断
const add = function(x: number, y: number, z?: number): number {
    if (typeof x === 'number') {
        return x + y + z;
    }else{
        return x + y;
    }
}

// 这里是声明函数类型返回方法=>
const add2: (x: number, y: number, z?: number) => number = add;

let result = add(2, 3)