// Menor número

// Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado.Ejemplo:

// // Ingrese números: 5 7 99 34 54 2 12

// // El menor número es: 2

let numbers = prompt("Ingrese nùmeros separados por espacios");

let numbersList = numbers.split(" ");

let menor = 9999999999;
let number = 0;


for (let i = 0; i < numbersList.length; i++) {

    number = Number(numbersList[i]);
    if (number < menor) {
        menor = number;
    };
}

alert(`El menor número de la lista
${numbersList}
es el ${menor}.`)