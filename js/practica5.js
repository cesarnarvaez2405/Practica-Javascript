"uses strict"

var datoA = 11;
var datoB = 2;


// var and = (datoA > && datoB >10)

var residuo = datoA % datoB
console.log(residuo)

var or = (datoA >= 10 || datoB > 5)

var not = ((datoA >5))

console.log(not)


// ----------------asignacion -----------------


var datoAC = 10;

var igual = datoAC

var masIgual = 10
masIgual += datoAC
console.log(masIgual)

var menosIgual = 10
menosIgual -= datoA;
console.log(menosIgual)

var portIgual = 10
portIgual *= datoA
console.log(portIgual)

var divisionIgual = 20
divisionIgual /= datoA
console.log(divisionIgual)


// ----------------concatenacion-----------------

var nombre ="Sergio"
var apellido = "Narvaez"

var concatenacionTexto = nombre + " " + apellido
console.log(concatenacionTexto)


// ---------------operador ternario--------------

// es hacer una condicional pero con la necesidad de eniar los resultados booleanos a una variable
var resultado = datoA > datoB ? "si es mayor ":"No es mayor"
console.log(resultado)

// -------------Tipo de datos-------------

var activo = true;

var persona = {
    numero : 10,
    deporte: "Correr"
}

console.log(typeof persona.numero)