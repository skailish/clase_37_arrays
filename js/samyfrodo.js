// Sam y Frodo

// Crear un programa que permita saber si Sam y Frodo están juntos.El programa debe permitir ingresar nombres separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después.Ejemplo:

// // Ingresar nombres: Sam Frodo Legolas
// // Sam y Frodo están juntos, ¡Frodo está a salvo!

// // Ingresar nombres: Sam Orco Frodo
// // Sam y Frodo están separados, ¡Frodo está en peligro!

let nombres = prompt("Escriba una lista de nombres separados por espacios");

const nombresLista = nombres.split(" ");

let mensaje = "Sam y Frodo están";

let frodo = nombresLista.indexOf("frodo");
let sam = nombresLista.indexOf("sam");

if (frodo == (sam - 1) || frodo == (sam + 1)) {
    mensaje += " juntos, ¡Frodo está a salvo!";
} else {
    mensaje += " separados, ¡Frodo está en peligro!"
};

alert(mensaje);