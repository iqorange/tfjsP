// TS 类型
// boolean 布尔型
let isDone: boolean = false

// number 数字
let age: number = 20
// 二进制
let binaryNumber: number = 0b1111

// 字符串
let firstName: string = 'RCRC'
let message: string = 'Hello, ${firstName}, age is ${age}'

// 空
let u: undefined = undefined
let n: null = null

// undefined是所有类型的子类型
let num: number = undefined

// any可以任意调用方法和属性，尽量避免使用，而且会失去类型本身的提示
let notSure: any = 4
notSure = 'maybe it si a string'
notSure = true

// 联合类型
let numberOrString: number | string = 234
numberOrString = 'abc'

