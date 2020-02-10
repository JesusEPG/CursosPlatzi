async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Hola, ' + nombre);
      resolve(nombre);
    }, 1500);
  });
};

async function saludo(nombre) {
  await setTimeout(function () {
    console.log('Hola, ' + nombre);
  }, 3500);
  await setTimeout(function () {
    console.log('Adios, ' + nombre);
  }, 1000);
};

saludo("Jesus")
