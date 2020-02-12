// Perros y gatos

// Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado y los gatos por otro.Ejemplo:

// // Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
// // Resultado: 🐶🐶🐶🐶🐱🐱🐱

let lista = prompt("Ingrese una lista de perros y gatos");

let listaPerrosGatos = lista.split(" ");
duracion = listaPerrosGatos.length;

let perros = "";
let gatos = "";

for (let i = 0; i < duracion; i++) {
    switch (listaPerrosGatos.pop()) {
        case "perro":
            perros += " perro";
            break
        case "gato":
            gatos += " gato";
    }
}

listaPerrosGatos = perros + gatos;
listaPerrosGatos = listaPerrosGatos.split(" ");
listaPerrosGatos.shift();

alert("La lista quedó: " + listaPerrosGatos);