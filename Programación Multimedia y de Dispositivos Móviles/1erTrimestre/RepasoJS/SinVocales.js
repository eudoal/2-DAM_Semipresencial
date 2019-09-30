const rl = require('readline-sync');

let texto = '';

let respuesta = rl.question('Introduce un texto, el resultado sera el texto sin vocales: ');

withoutVowels(texto);

function withoutVowels() {

    texto = respuesta.replace(/[aeiou]/g, '');
}

console.log(texto);