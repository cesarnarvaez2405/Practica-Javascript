"uses strict"

var datoA = 10;
var datoB = 10;
var resultado = "Sin dato";


// ------------Condicion If-----------------

if (datoA >= datoB) {

    resultado = "La condicion se cumplio"

} else {
    resultado = "La condicion no se cumple"
}



// -------Switch--------------

var edad = 50;

switch (edad) {
    case 10:
        resultado = "La edad es 10 años"

        break;

    case 20:
        resultado = "La edad es 20 años"

        break;

    case 30:
        resultado = "La edad es 30 años"

        break;

    case 40:
        resultado = "La edad es 40 años"

        break;

    default:
        resultado = "Ningun caso coincide"
        break;
}

console.log(resultado)
