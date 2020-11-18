class Animal {
    readonly name: string;
    static categories: string[] = ['mammal', 'bird']
    constructor(name: string) {
        this.name = name
    }
    run() {
        return this.name + ' is running.'
    }
}

console.log(Animal.categories)
const snake = new Animal('lily')
console.log(snake.run())

class Dog extends Animal {
    bark() {
        return this.name + ' is barking'
    }
}

const dog = new Dog('dogger')
console.log(dog.bark())

class Cat extends Animal {
    constructor(name: string) {
        super(name)
        console.log(this.name)
    }
    // 重写
    run() {
        return 'Meow, ' + super.run()
    }
}

const maomao = new Cat('maomao')
console.log(maomao.run())