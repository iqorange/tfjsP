interface Person {
    readonly id: number;
    name: string;
    age?: number;
}
let viking: Person = {
    id: 1234,
    name: 'viking'
}

interface Radio {
    switchRadio(): void;
}

interface RadioWithBatter extends Radio {
    checkBatteryStatus(): void;
}

interface Battery {
    checkBatteryStatus(): void;
}

class Car implements Radio {
    switchRadio() {

    }
}

class Cellphone implements RadioWithBatter {
    switchRadio() {

    }
    checkBatteryStatus() {

    }
}