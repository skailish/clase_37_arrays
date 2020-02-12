// Saludos

// Crear un programa que pida ingresar nombres separados por espacios y devuelva un mensaje que contenga un saludo a cada persona.Ejemplo:

// // Ingrese nombres: Ada Greta Grace

// // ¡Hola Ada!
// // ¡Hola Greta!
// // ¡Hola Grace!

let nombres = prompt("Ingrese nombres separados por espacios")
let nombresSeparados = nombres.split(" ");
let saludo = "";

for (let i = 0; i <= ([nombresSeparados.length] - 1); i++) {
    saludo += "\n¡Hola " + nombresSeparados[i] + "!";

}

alert(saludo);