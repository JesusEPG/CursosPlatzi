const obj ={
  name: "jesus",
  age: 15
}

let {name, ...all} = obj;

console.log(name, all)

// const helloWorld = () => {
//   return new Promise ((resolve, reject) => {
//     if (true) resolve("Hello World");
//     reject(new Error("test error"))
//   })
// }

// helloWorld()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finalizo la promesa"))


  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      (true)
      ? setTimeout(() => resolve('Hellos World'), 3000)
      : reject(new Error('Test Error'))
    });
  };
  
  
  helloWorld()
    .then (Response => console.log(Response))
    .catch (error => console.log(error))
    .finally (() => console.log('Finalizo'))



const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
console.log(match)

const year = match[1];
const month = match[2];
const day = match[3];


