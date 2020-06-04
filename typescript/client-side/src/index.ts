let a: number = 123;

const h1 = document.createElement("h1");
h1.innerHTML = "Hello, I am RC";
document.body.appendChild(h1);

// 基本数据类型
let num: number = 123;
let bool: boolean = false;
let str: string = "KB";
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let u: undefined = undefined;
let n: null = null;

let obj: object;
obj = { name: "KB" };

function getKeys (obj: object){
    return Object.keys(obj);
}
getKeys({a: 'a'});

// 元组
let tuple: [string, number, boolean];
tuple = ["a", 2, false];
tuple[1] = 3;
tuple[0].split(":");

interface tuple2 extends Array<number | string> {
    0: string;
    1: number;
    length: 2;
}

// 枚举
enum Roles {
    SUPER_ADMIN = 0,
    ADMIN = 1,
    USER = 2
}
const superAdmin = Roles.SUPER_ADMIN;
console.log(superAdmin);
enum Roles2 {
    SUPER_ADMIN = 1,
    ADMIN = 3,
    USER = 7
}
console.log(Roles2[3]); // 'ADMIN'

// Any
let value: any;
value = 123;
value = "abc";
value = false;

const array: any[] = [1, "a", true];

// void
const consoleText = (text: string): void => {
    console.log(text);
};

// never
const errorFunc = (message: string): never => {
    throw new Error(message);
}

const infinteFunc = (): never => {
    while(true){}
};

let neverVariable = (() => {
    while(true) {}
})();
// neverVariable = 123;

// unknown ts3.0新增类型
// 相对于any是安全的
let value1: unknown;
console.log(value.name)
console.log(value.toFixed());
console.log(value.length);

// 交叉类型
const merge = <T, U>(arg1: T, arg2: U): T & U => {
    let res = <T & U>{};
    res = Object.assign(arg1, arg2);
    return res;
};
const info1 = {
    name: "KB"
};
const info2 = {
    age: 10
};
const KBInfo = merge(info1, info2);

// console.log(KBInfo.address);

const getLength = (content: string | number): number => {
    if(typeof content === "string") return content.length;
    else return content.toString().length;
};
console.log(getLength("abc"));
console.log(getLength(123));