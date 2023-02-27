"uses strict"

// ------------------Ciclo for-----------------

var productos = 5;


// for (let contador = 0; contador < productos; contador++) {
//     console.log("Producto # "+contador)
    
// }



// -----------------------ciclo while--------------

// while (productos>0) {
//     console.log('productos vendidos ' +productos);
//     productos--; 
// }


// -----------------------ciclo DoWhile----------------

// do {
//     console.log('productos vendidos '+productos)
//     productos--;
    
// } while (productos>0);

// ---------Ejemplo Cuantos impares hay entre 20 numeros----------------

var contador = 0;
var cuenta = 0;

for (let contador = 0; contador <= 20; contador++) {

    if (contador == 5) {

        break;
        
    }

    if (contador % 2 == 0) {

        continue;

    
        
    }
    cuenta++;
    debugger;
    
}

console.log("Hay "+cuenta+" Numeros de impares")