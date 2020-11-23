function getLength(input: string | number): number {
    // const str = input as String
    // if(str.length){
    //     return str.length
    // }else{
    //     const number = input as Number
    //     return number.toString().length
    // }
    if((<string>input).length) {
        return (<string>input).length
    }else{
        return input.toString().length
    }
}