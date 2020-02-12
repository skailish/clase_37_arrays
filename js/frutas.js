// FRUTAS

// Crear un programa que pida ingresar 🍎, 🍐y 🍑 y devuelva un mensaje con la cantidad que hay de cada una.Ejemplo:

// // Ingrese frutas: 🍎🍎🍐🍑🍎🍑

// // Hay 3 🍎, 1 🍐 y 2 🍑

let frutas = prompt("Ingrese todas las manzanas, peras y duraznos que quiera");

let frutasLista = frutas.split(" ");
let manzanas = "";
let peras = "";
let duraznos = "";
let duracion = Number(frutasLista.length);


for (let i = 0; i < duracion; i++) {
    switch (frutasLista.pop()) {
        case "manzana":
            manzanas += " manzana";
            break
        case "pera":
            peras += " pera";
            break
        case "durazno":
            duraznos += " durazno";
    }

}

manzanas = manzanas.split(" ");
peras = peras.split(" ");
duraznos = duraznos.split(" ");

manzanas.shift();
peras.shift();
duraznos.shift();


alert(`Hay ${manzanas.length} manzanas, ${peras.length} peras y ${duraznos.length} duraznos`);