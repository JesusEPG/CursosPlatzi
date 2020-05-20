let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4){
            //Completado el request
            console.log('completado')
            console.log(xhttp.status)
            if(xhttp.status == 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                callback(error, null);            
            }
        }
    }
    xhttp.send();
}

//elementos de personajes
//acceder al primer personaje
//obtener ubicacion

fetchData(API, function(err, data) {
    if(err) {
        console.log("Error1")
        return console.error(err);
    }
    fetchData(API+ data.results[0].id, function(err2, data2){
        if(err2) {
            return console.error(err2);
        }
        fetchData(data2.origin.url, function(err3, data3){
            if(err3) {
                return console.error(err3);
            }
            console.log(data1.info);
            console.log(data2.name);
            console.log(data3.dimension);
            
            
        })
    })
})

function dataResponseHandler() {

}