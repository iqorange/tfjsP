function echo<T>(arg: T): T {
    return arg;
}
// const str: string = 'str'
const result = echo('str')

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}
const result2 = swap(['string', 123])
console.log(result2)

function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

const arrs = echoWithArr([1, 2, 3])

interface IWithLength {
    length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

const str = echoWithLength('str')
const obj = echoWithLength({ length: 10, width: 10 });
const arr2 = echoWithLength([1, 2, 3])

class Queue<T> {
    private data = [];
    add(item: T): number {
        return this.data.push(item);
    }
    remove(): T {
        return this.data.shift();
    }
}

const queue = new Queue<number>()
queue.add(1)

interface KeyPair<K, U> {
    key: T;
    value: U;
}

let kp1: KeyPair<number, string> = { key: 1, value: 'string value'}
let kp2: KeyPair<string, number> = { key: 'string value', value: 2}

let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

interface IPlus<T> {
    (a: T, b: T): T
}
function plus(a: number, b: number): number {
    return a + b;
}
function connect(a: string, b: string): string {
    return a + b;
}
const a: IPlus<number> = plus
const b: IPlus<string> = connect