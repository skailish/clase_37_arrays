// Contiene elementos

// Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea averiguar si existe.El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no.Ejemplo:

// // Ingrese valores: 5 7 99 34 54 2 12
// // Ingrese valor a buscar: 54

// // El valor 54 se encuentra entre los valores originales

let numeros = prompt("Ingrese nùmeros separados por espacios");
let buscar = prompt("Elija el número a buscar en la lista");

let listaNumeros = numeros.split(" ");

let numeroCorregido = 0;
let seEncuentra = "El valor no se encuentra en la lista: " + listaNumeros;


for (let i = 0; i < listaNumeros.length; i++) {

    numeroCorregido = Number(listaNumeros[i]);

    if (numeroCorregido == buscar) {
        seEncuentra = `El valor ${buscar}, se encuentra en la lista original`
    }

}

alert(seEncuentra);