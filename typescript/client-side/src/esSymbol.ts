const s = Symbol();
typeof s;

const s1 = Symbol("KB");
const s2 = Symbol("KB");
// console.log(s1 === s2); // false
console.log(s1.toString()); // Symbol(KB)
console.log(Boolean(s)); // true
console.log(!s); // false

let prop = "name";
const objk = {
    [prop]: "KB"
};
console.log(objk.name); // 'KB'

let named = Symbol();
let objb = {
    [named]: "KB"
};
console.log(objb); // {Symbol(): 'KB'}
console.log(objb[name]); // 'KB'
console.log(objb.name); // undefined;

const namep = Symbol("name");
const objp = {
    [namep]: "KB",
    age: 10
};
for(const key in obj){
    console.log(key);
}
// => 'age'
console.log(Object.keys(objp));
// ['age']
console.log(Object.getOwnPropertyNames(objp));
// ['age']
console.log(JSON.stringify(objp));
// '{"age": 10}'

const name1 = Symbol("name");
const obj1 = {
    [name]: "KB",
    age: 18
};
const SymbolPropNames = Object.getOwnPropertySymbols(obj);
console.log(SymbolPropNames);
// [ Symbol(name) ]
// console.log(obj1[SymbolPropNames[0]]);
// 'lison'

const name2 = Symbol("name");
const obj2 = {
    [name]: "KB",
    age: 18
};
console.log(Reflect.ownKeys(obj));
// [ 'age', Symbol(name) ]

