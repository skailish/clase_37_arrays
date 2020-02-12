// Chat

// Crear un programa que dado una lista de nombres de usuarias separadas por espacios, muestre un mensaje con el status del chat.Las reglas son:

// Para una usuaria, debe mostrar: nombre usuaria + está conectada
// Para dos usuarias, debe mostrar: nombre usuaria 1 + y + nombre usuaria 2 + están conectadas
// Para más de dos usuarias, debe mostrar: nombre usuaria 1, nombre usuaria 2 + y X persona(s) más están conectadas
// Ejemplo:

// // Ingrese nombres de usuarias: Ada
// // Ada está conectada

// // Ingrese nombres de usuarias: Ada Grace
// // Ada y Grace están conectadas


// // Ingrese nombres de usuarias: Ada Grace Marie
// // Ada, Grace y 1 persona(s) más están conectadas

let nombres = prompt("Ingrese los nombres de usuarias conectadas");

let listaNombres = nombres.split(" ");

let primera = "";
let segunda = "";
let resto = "";

if (listaNombres.length == 1) {
    alert(`${listaNombres[0]} está conectada`)
} else if (listaNombres.length == 2) {
    alert(`${listaNombres[0]} y ${listaNombres[1]} están conectadas`)

} else {
    primera = listaNombres.shift();
    segunda = listaNombres.shift();
    resto = listaNombres.length;

    alert(`${primera}, ${segunda} y ${resto} persona(s) más están conectadas`)
}