const rl = require('readline-sync');

let dataArray = [];

let cuadrado = [];

let fin = false;

while (!fin) {

    let numero = rl.question('Introduce los numeros, para calcular la desviacion tipica pulsa Enter: ');

    if (numero) {
        dataArray.push(parseInt(numero));
        console.log("Has añadido a la lista: " + numero);

    }
    else {
        fin = true;
    }
}

standardDeviation(dataArray);

function standardDeviation() {
    let suma = 0;
    let media = 0;
    let total = [];

    const reducer = (a, b) => a + b;

    suma = dataArray.reduce(reducer);

    dividendo = dataArray.length
    media = (suma / dividendo);

    for (var i = 0; i < dividendo; i++) {

        x = (dataArray[i]) - media;

        cuadrado = Math.pow(x, 2);
        total.push(cuadrado);

    }

    total = Math.sqrt((total.reduce(reducer)) / dividendo);
    console.log("La Derivacion Tipica es: " + total);

}
