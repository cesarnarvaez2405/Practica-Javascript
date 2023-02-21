"uses strict"

// JSON -> Intercambio de datos 

// Desectuturar JSON

var persona = {nombre: "cesar", twitter: "Cesarnarvaez24"}

var personas = [
    {nombre: 'Hugo', twitter: 'Hugo300'},
    {nombre: 'Fernando', twitter: 'Fernadnmo3400'},
    {nombre: 'Lina', twitter: 'linao300'},
    persona
]

var personaJSON = JSON.stringify(persona)

var nuevoPersona = JSON.parse(personaJSON)