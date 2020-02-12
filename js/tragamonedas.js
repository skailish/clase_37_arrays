// Tragamonedas

// Crear un programa que permita ingresar un conjunto de 5 símbolos y determine si son iguales.Si lo son, mostrar un mensaje indicando que se ha ganado.Si se ingresan más de 5 sólo deben evaluarse los primeros 5. Ejemplo:

// // Ingrese símbolos: ⭐️⭐️⭐️💫✨
// // ¡Has perdido! Inténtalo nuevamente

// // Ingrese símbolos: 💫💫💫💫💫
// // ¡Felicitaciones! Has ganado

let simbolos = prompt("Ingrese una lista de simbolos");
simbolos = simbolos.split(" ");

if (simbolos[0] == simbolos[1] && simbolos[1] == simbolos[2] && simbolos[2] == simbolos[3] && simbolos[3] == simbolos[4]) {
    alert("Felicitaciones. Has ganado.");
} else {
    alert("Lo siento. Has perdido.");
}
