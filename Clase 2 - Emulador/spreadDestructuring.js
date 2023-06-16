//Destructuring de objetos
const persona = {
    nombre: "Maxi",
    apellido: "Bordes",
    edad: 45,
    estaVacunadoCovid: true
}

const {nombre} = persona

console.log(nombre);

const personaConDni = {

}

//Destructuring de arrays
const frutas = ["manzana", "pera", "mango", "uva"]

console.log(frutas[1])

const [fruta1, fruta2, fruta3, fruta4] = frutas

console.log(fruta3)

//Spread operator (...)
//Objetos
const personaCopiaConDni = {
    ...persona,
    dni: 45673221
}

console.log(personaCopiaConDni);

//Arrays
const frutasCopia = [...frutas, "maracuyá"]

console.log(frutasCopia);
