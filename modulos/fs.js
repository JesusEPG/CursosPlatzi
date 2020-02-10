const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (error, data) => {
    //leido
    //devuelve un buffer
    console.log(data.toString());
  })
};

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (error, data) => {
    if(error) {
      console.error('No se ha podido escribir el archivo', error);
    } else {
      console.log('Se ha escrito correctamente');
    }

  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

// escribir(__dirname + "/archivo.txt", "Soy un archivo nuevo", console.log)
//leer(__dirname+'/archivo.txt');
// borrar(__dirname+'/archivo.txt', console.log);

const tb = [
  {
    a: 1,
    b: 2
  },
  {
    a: 2,
    b: 1
  }
];

console.table(tb);

console.group('Conver');
console.log('Hola');
console.log('Adios');
console.groupEnd('Conver');

//veces: 1
console.count('veces');

//veces: 2
console.count('veces');

//veces: 3
console.count('veces');
console.countReset('veces');
console.count('veces');