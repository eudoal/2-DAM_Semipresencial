const rl = require('readline-sync');

let lista = [];
let fin = false;

while (!fin) {
    
    let articulo = rl.question('Introduce los articulos de tu compra, si quieres terminar pulsa Enter: ');

    if (articulo) {
        lista.includes(articulo) !== true && lista.push(articulo);
        console.log("Has añadido a la lista: "+articulo);
    }
    else {
        fin = true;
    }
}

console.log("Estos són tus articulos");
lista.forEach(function (nuevalista) {
    console.log(nuevalista);
});