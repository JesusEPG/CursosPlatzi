const doSomethingAsync = (flag) => {
    return new Promise((resolve, reject) => {
        (flag)
            ? setTimeout(()=> resolve({test: "After Timeout"}), 2000)
            : reject(new Error("Hubo un error"))
    })
}

const handleSomething = async () => {
    const something = await doSomethingAsync(true);
    console.log("OTRA COSA"); 
    console.log(something);
    console.log("OTRA COSA MAS");  
}

console.log('before')
handleSomething();
console.log('after')

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync(false);
        console.log(something); 
    } catch (error) {
        console.error(error)
    }
}

console.log('before2')
anotherFunction();
console.log('after2')