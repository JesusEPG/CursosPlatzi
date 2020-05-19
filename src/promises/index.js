const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve("Hey!")
        } else {
            reject("ups!");
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(()=>{
                resolve('True')
            }, 2000)
        } else {
            const error = new Error('ups2!')
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error))


    Promise.all([somethingWillHappen(), somethingWillHappen2()])
        .then(response => console.log('Array of response', response))
        .catch(error => console.log(error))