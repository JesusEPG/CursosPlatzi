function seRompeAsync() {
  setTimeout(() => {
    return 3 + z;
  }) 
 }

function seRompe() {
  return 3 + z;
};

function otraFn() {
  seRompe();
}

try {
  seRompe();
} catch (error) {
  console.log('Aqui hay error: ');
  console.error(error);
  console.log('No hubo problema manejandolo');
  
}