//Declaración de variables.
const flag = false
let number1 = 10
const nombre = "Lautaro"
const persona = {
    edad: 10,
    nombre: "Dario",
    leGustaElCafe: true
}

console.log(persona.leGustaElCafe)

//Generar una función arrow que devuelva si un número ingresado es par o no
const names = ["Omar", "Oscar", "Osvaldo", "Sebastián"]
//Utilizar map para pasar los nombres a minúsculas
const namesToLowerCase = names.map(name => name.toLowerCase())
console.log(namesToLowerCase);

//Utilizar filter para filtrar algún nombre
const namesWithO = names.filter(name => name.includes("s"))
console.log(namesWithO);
//Find es más específico, para encontrar un valor puntual
const nameSebastian = names.find(name => name === "Sebastián")
console.log(nameSebastian);

const products = [
    {
        id: 1,
        qty: 2,
        price: 34.22
    },
    {
        id: 3,
        qty: 3,
        price: 12.99
    },
    {
        id: 5,
        qty: 1,
        price: 55.78
    },
]
//Calcular el total con reduce
const total = products.reduce((total, product) => total += product.price * product.qty, 0)
console.log(total);