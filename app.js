function filtranum(numeros, resultado) {
    for (let i = 0; i < numeros.length; i++) {
        let num = numeros[i].toString(); // Convierte el número actual en una cadena y lo almacena en la variable num
        if (num[0] === num[num.length - 1]) {
            resultado.push(numeros[i]); // Si el primer y último carácter son iguales, agrega el número actual al array resultado
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
  let primerLinea = parseInt(lineas[0]); // convierte una cadena en un número entero
  let numeros = lineas[1].split(' ').map(Number); // crea un nuevo arreglo con los resultados de llamar a una función dada para cada elemento del arreglo original y        
// divide una cadena en un arreglo de subcadenas basándose en un separador especificado
  let resultado = [];

  let funcion = filtranum(numeros, resultado);
  console.log(funcion);
  console.log(resultado);
});

