let array = [1,2,3, [1,2, [1,2]]];

console.log(array.flat(2));

const arr = [1, 2, 3]
console.log(array.flatMap(value => [value, value*2]))


let hello = "   hello  ";
console.log(hello.trimStart())
console.log(hello.trimEnd())

//optional catch binding

try {
  
} catch {
  console.log(error)
}

//From entries

let entries = [["name", "oscar"], ["age", 25]]
console.log(Object.fromEntries(entries))

let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
