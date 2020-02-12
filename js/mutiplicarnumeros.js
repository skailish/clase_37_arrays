// Multiplicar números individuales

// Crear un programa que pida ingresar números separados por espacios y luego pregunte por cuánto se desea multiplicar cada número.El programa debe devolver un mensaje con un array donde cada elemento es el resultado del elemento del primer array(en la misma posición) multiplicado por el número ingresado.Ejemplo:

// // Ingrese números: 5 7 15 22 40
// // Ingrese multiplicador: 2

// // El array resultante es: [10, 14, 30, 44, 80]

let numbers = prompt("Ingrese la lista de números, separadas por espacios");
let times = Number(prompt("Ingrese un multiplicador"))
numbers = numbers.split(" ");

for (i = 0; i < numbers.length; i++) {

    numeroCorregido = Number(numbers[i]);

    numbers[i] = numeroCorregido * times;

};

alert("La nueva lista es: " + numbers);