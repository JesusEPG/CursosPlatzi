function newFunction(name) {
    var name = name || 'jesus';
    console.log(name);
}

//es6
function newFunction2(name = 'jesus') {
    console.log(name);
    `My name is ${name}`
}

let lorem = "hola que tal. \n"
+ "soy otra linea"

let lorem2 = `Hola que tal.
soy otra linea`

let person = {
    name: "Jesus",
    edad: 32
}

let worker = {
    ...person,
    work: "programmer"
}

console.log(worker)

const {name, edad} = person;

let name = "Jesus";
let edad = 32;

const obj = {
    name,
    edad
}

class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

let calc = new Calculator();
console.log(calc.sum(1, 2));

function* helloWorld() {
    if(true) {
        yield "Hello, "; //guarda estado de forma interna
    }

    if(true) {
        yield "World";
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);//Hello,
console.log(generatorHello.next().value);//World
console.log(generatorHello.next().value);//undefined