let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = () => {
            if(xhttp.readyState === 4){
                //Completado el request
                console.log('completado')
                console.log(xhttp.status)
                if(xhttp.status == 200) {
                    // callback(null, JSON.parse(xhttp.responseText))
                    resolve(JSON.parse(xhttp.responseText))
                } else {
                    const error = new Error('Error ' + url_api);
                    reject(error);            
                }
            }
        }
        xhttp.send();
    })  
}


fetchData(API)
    .then(response => {
        return fetchData(API+response.results[0].id)
    })
    .then(response => {
        return fetchData(response.origin.url)
    })
    .then(response => {
        console.log("finalizado todo")
    })
    .catch(err => console.log(err))