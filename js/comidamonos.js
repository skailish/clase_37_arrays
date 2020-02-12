// Comida para monos

// Crear un programa que permita ingresar una lista de 🐵(monos) y 🍌(bananas).Preguntar luego cuántas bananas come cada mono.Mostrar en un mensaje si hay suficientes bananas para cada mono.Ejemplo:

// // Ingresar monos y bananas: 🐵🍌🍌🍌🐵🍌🐵🍌
// // Cuántas bananas come un mono?: 2
// // ¡Oh no!¡No hay suficientes bananas para los monos! 😭

let lista = prompt("Ingrese una lista de monos y bananas");
let cuantasBananasPorMono = Number(prompt("ingrese cuántas bananas comen cada mono"));

let bananasMonos = lista.split(" ");
duracion = bananasMonos.length;

let bananas = "";
let monos = "";

for (let i = 0; i < duracion; i++) {
    switch (bananasMonos.pop()) {
        case "banana":
            bananas += " banana";
            break
        case "mono":
            monos += " mono";
    }

}

bananas = bananas.split(" ");
monos = monos.split(" ");
bananas.shift();
monos.shift();

if (((bananas.length / cuantasBananasPorMono) / monos.length) < 1) {
    alert(`Hay ${bananas.length} bananas y ${monos.length} monos.
    Cada mono come ${cuantasBananasPorMono} bananas.
    ¡Oh no!¡No hay suficientes bananas para los monos! 😭`);
} else {
    alert(`Hay ${bananas.length} bananas y ${monos.length} monos.
    Cada mono come ${cuantasBananasPorMono} bananas.
    Alimentaste a los monos`);

}

