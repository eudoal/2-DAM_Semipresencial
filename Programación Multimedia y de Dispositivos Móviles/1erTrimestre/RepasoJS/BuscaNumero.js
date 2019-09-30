const rl = require("readline-sync");

const dataArray = [3, 134, 4, 66, 33, 5, 0];

let x = rl.question("Introduce un numero a buscar: ");

linearSearch(x, dataArray);

function linearSearch() {
  x = parseInt(x);
  resultado = dataArray.indexOf(x);

  if (resultado > -1) {
    console.log("El número " + x + " SI está");
  } else {
    console.log("El número " + x + " NO está");
  }
}
