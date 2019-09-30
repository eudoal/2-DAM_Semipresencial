const rl = require('readline-sync');

let minutos = parseInt(rl.question('Introduce los minutos consumidos:'))
let tarifa = 10;
const tramo1 = 180, tramo2 = 240;
const diferencia = tramo2 - tramo1;


if (minutos >= tramo1 && minutos < tramo2) {

    tarifa = tarifa + ((minutos - tramo1) * .10);

}
if (minutos >= tramo2) {

    tarifa = tarifa + (diferencia * .10) + ((minutos - tramo2) * .20);

}

console.log("Te toca pagar este mes..... " + tarifa + "€");