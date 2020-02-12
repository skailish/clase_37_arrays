// Suma de todos los números

// Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números.Ejemplo:

// // Ingrese números: 5 7 10 12 24

// // La suma de todos los números es: 58

let numbers = prompt("Ingrese nùmeros separados por espacios");

let numbersList = numbers.split(" ");

let number = 0;
let resultado = 0;


for (let i = 0; i < numbersList.length; i++) {

    number = Number(numbersList[i]);
    resultado += number;
}

alert(`La suma de los  números de la lista
${numbersList}
es ${resultado}.`)