// Encontrar índice

// Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar el índice.El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, o indicar si no se ha encontrado.Ejemplo:

// // Ingrese valores: 5 7 12 34 54 2 12
// // Ingrese valor a buscar: 12

// // El valor 12 se encuentra en el índice 12
// Una vez hecho este ejercicio, investigar el método indexOf.

let numeros = prompt("Ingrese nùmeros separados por espacios");
let buscar = Number(prompt("Elija el número a buscar en la lista"));

let listaNumeros = numeros.split(" ");

let numeroCorregido = 0;
let seEncuentra = "EL valor no se encuentra en la lista: " + listaNumeros;


for (let i = 0; i < listaNumeros.length; i++) {

    numeroCorregido = Number(listaNumeros[i]);

    if (numeroCorregido == buscar) {
        seEncuentra = `El valor ${buscar}, se encuentra en la lista original, bajo el índice ${i}`
    }

}

alert(seEncuentra);