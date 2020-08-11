var arr = [1, 2, [3, 4, [5, 1, 2]]]
let set = new Set()
function dxArr(arr){
    for(let e of arr){
        if(e instanceof Array){
            dxArr(e);
        }else if(typeof e == 'number'){
            set.add(e);
        }
    }
}
dxArr(arr)
var arr = Array.from(set).sort();
console.log(arr)
// Object.assign({}, obj)

function* idMaker(){
    let index = 0
    while(true){
        yield index++
    }
}
let gen = idMaker()
for(let i=0;i<10;i++){
    console.log(gen.next().value)
}