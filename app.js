function filtranum(numeros, resultado) {
    for (let i = 0; i < numeros.length; i++) {
        let num = numeros[i].toString();
        if (num[0] === num[num.length - 1]) {
            resultado.push(numeros[i]);
        }        
    }
    return resultado.length;
}

const fs = require('fs');

fs.readFile('vector.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let lineas = data.split('\n');
  let primerLinea = parseInt(lineas[0]);
  let numeros = lineas[1].split(' ').map(Number);
  let resultado = [];

  let funcion = filtranum(numeros, resultado);
  console.log(funcion);
  console.log(resultado);
});

