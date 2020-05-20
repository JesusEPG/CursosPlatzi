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

const handleFetch = async () => {
    try {
        const charactersData = await fetchData(API);
        const character = await fetchData(API+charactersData.results[0].id);
        const characterDimension = await fetchData(character.origin.url);
        console.log("Termine todo");
        console.log(charactersData.info.count)
        console.log(character.name);
        console.log(characterDimension.dimension);      
    } catch (error) {
        console.error(error);
    }
}

handleFetch()