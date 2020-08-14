/*
console.log(1 + {})
console.log({} + 1)
console.log(1 + [10, 2, [3]])
console.log(1 + '2')
let arr = [1, 2, [3, 4, [5]]]
let arr1 = 0 + arr
console.log(typeof arr1)
*/
let arr2 = [];
for(let i=0;i<10000000;i++){
    arr2.push(Math.floor(10000000*Math.random()))
}
let count = 0
let time2 = Date.now();
// arr2 = arr2.sort()
console.log(Date.now()-time2)
let time1 = Date.now()
for(let e of arr2){
    if(e > 5000000){
        count++
    }
}
console.log(Date.now()-time1, count)