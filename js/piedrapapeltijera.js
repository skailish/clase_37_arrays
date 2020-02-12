// Piedra, papel, tijera III

// Crear un programa que permita ingresar el nombre de dos jugadoras y dos listas con los valores de la jugada en una ronda de "piedra, papel o tijera".Primero debe preguntarse el nombre de la jugadora 1, luego sus jugadas, luego el nombre de la jugadora 2, luego sus jugadas.El programa debe comparar los valores de las listas uno a uno(el primero con el primero, el segundo con el segundo) sumando un punto a la jugadora que gane la ronda.Al finalizar, mostrar quién gano y los puntajes finales.Ejemplo:

// // Ingrese nombre jugadora 1: Ada
// // Ingrese jugadas de Ada: piedra papel papel piedra tijera

// // Ingrese nombre jugadora 2: Grace
// // Ingrese puntajes de Grace: papel piedra tijera tijera papel

// // Resultado: 3 (Ada) vs 2 (Grace)
// // Ganadora: Ada

/// INGRESA DATOS PRIMERA JUGADORA
let name1 = prompt("Primera Jugadora: ingrese su nombre");
let jugadas1 = "";
for (let i = 0; i < 5; i++) {
    jugadas1 += " " + prompt("Primera Jugadora: ingrese una jugada, le quedan " + (5 - i) + " jugadas");
}
jugadas1 = jugadas1.split(" ");
jugadas1.shift();

/// INGRESA DATOS SEGUNDA JUGADORA
let name2 = prompt("Segunda Jugadora: ingrese su nombre");
let jugadas2 = "";
for (let i = 0; i < 5; i++) {
    jugadas2 += " " + prompt("Segunda Jugadora: ingrese una jugada, le quedan " + (5 - i) + " jugadas");
}
jugadas2 = jugadas2.split(" ");
jugadas2.shift();


/// COMPARACION Y RESULTADOS
let resultadoJugadora1 = 0;
let resultadoJugadora2 = 0;
let mensajeError = "";
let empates = 0;


for (let i = 0; i < 5; i++) {

    if (jugadas1[i] == jugadas2[i]) { /// EMPATE
        resultadoJugadora1 += 0;
        resultadoJugadora2 += 0;
        empates += 1;

    } else { /// NO EMPATE
        if ((jugadas1[i] === "piedra" && jugadas2[i] === "tijera") ||
            (jugadas1[i] === "papel" && jugadas2[i] === "piedra") ||
            (jugadas1[i] === "tijera" && jugadas2[i] === "papel")) {
            resultadoJugadora1 += 1;
            resultadoJugadora2 += 0;
        } else if ((jugadas2[i] === "piedra" && jugadas1[i] === "tijera") || (jugadas2[i] === "papel" && jugadas1[i] === "piedra") || (jugadas2[i] === "tijera" && jugadas1[i] === "papel")) {
            resultadoJugadora1 += 0;
            resultadoJugadora2 += 1;
        } else {
            mensajeError += `ERROR
            ${name1} en la jugada ${i + 1}: ${jugadas1[i]}
            ${name2} en la jugada ${i + 1}: ${jugadas2[i]}`;
        }
    }
}
let result = "";
if (resultadoJugadora1 < resultadoJugadora2) {
    result += "Ganó " + name2;
} else if (resultadoJugadora1 > resultadoJugadora2) {
    result += "Ganó " + name1;
} else {
    result += "Empataron";
}

alert(`${name1}: ${resultadoJugadora1}
${name2}: ${resultadoJugadora2}
Empates: ${empates}
Resultado: ${result}`);