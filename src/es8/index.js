const data = {
  frontend: "Oscar",
  backend: "Isabel",
}

const test = Object.entries(data);

console.log(test); //[ [ 'frontend', 'Oscar' ], [ 'backend', 'Isabel' ] ]
//permite saber cuantas key/value tiene los objetos
console.log(test.length)


const values = Object.values(data);
console.log(values);//[ 'Oscar', 'Isabel' ]


//Util para formatear string 
const string = "hello";

console.log(string.padStart(7, "hi"))
console.log(string.padEnd(12, "----"));



