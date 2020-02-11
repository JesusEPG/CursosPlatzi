const { exec, spawn } = require('child_process');

//Permite ejecutar cualquier comando de la terminal
//Lo cual incluye poder ejecutar otros scripts en js, node u otros lenguajes de programacion
exec('node modulos/errores.js', (err, stdout, sterr) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log(stdout);
  
});

//Para procesos mas grandes se puede usar spawn el cual da mucha mas informacio y manejabilidad sobre el proceso
// let proceso = spawn('dir');
// console.log(proceso.connected);
// proceso.stdout.on('data', (dato) => {
//   console.log(dato.toString());
// })