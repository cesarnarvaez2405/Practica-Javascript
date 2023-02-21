"uses estrict"

var nombre = "Cesar"; 

console.log(nombre)

// Var Son datos globales y destuctivas, se cambiara al mometno de usar la variable

function saludo(){
   let nombre = "juana";
    console.log(nombre)

    let edad = 20

    console.log(edad)
}

// let es un contenedor o una variable contenida en la funcion propia, no es global, no es destructiva 

saludo()
