// Exterminador

// Crear un programa que permita ingresar una lista de animales separados por espacios y devuelva un mensaje con todos los animales menos los mosquitos y alacranes.Ejemplo:

// // Ingrese animales: 🐱 🐭 🐶 🦟 🦊 🦂

// // Animales sin insectos: [🐱, 🐭, 🐶, 🦊]

let animals = prompt("Ingrese una lista de animales");

animals = animals.split(" ");

for (let i = 0; i < animals.length; i++) {
    if (animals[i] == "mosquito" || animals[i] == "alacran") {
        animals.splice(i, 1);
    }
}

alert(animals);