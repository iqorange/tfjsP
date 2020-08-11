~(() => {
    let s = new Set()
    for (let i=0;i<10;i++) {
        s.add(i);
        s.add(i+1);
    }
    s.delete(2)
    console.log(s.has(2))
    console.log(s.size)

    let m = new Map()
    for (let i=0;i<10;i++) {
        m.set(i, i*10)
    }

    for (let i of m) {
        console.log(i[0], i[1]);
    }
    /*
    let obj = {
        name: 'abc',
        age: 12
    }
    let arr = [1, 2, 3, 4, 5]
    for(let i of s){
        console.log(i)
    }
    for(let i in obj){
        console.log(i, obj[i])
    }
    for(let i of arr){
        console.log(i)
    }
    */
})()