// Puntajes

// Crear un programa que permita ingresar el nombre de dos jugadoras y dos listas con los puntajes de cada ronda de un juego separados por espacio.Primero debe preguntarse el nombre de la jugadora 1, luego sus puntajes, luego el nombre de la jugadora 2, luego sus puntajes.El programa debe comparar los valores de las listas uno a uno(el primero con el primero, el segundo con el segundo) sumando un punto a la jugadora que tenga mayor puntaje en la ronda.Al finalizar, mostrar quién gano y los puntajes finales.Ejemplo:

// // Ingrese nombre jugadora 1: Ada
// // Ingrese puntajes de Ada: 5 6 3 1 8

// // Ingrese nombre jugadora 2: Grace
// // Ingrese puntajes de Grace: 8 2 4 2 3

// // Resultado: 2 (Ada) vs 3 (Grace)
// // Ganadora: Grace

/// INGRESA DATOS PRIMERA JUGADORA
let name1 = prompt("Primera Jugadora: ingrese su nombre");
let puntajes1 += prompt("Primera Jugadora: ingrese sus puntajes");
}
puntajes1 = puntajes1.split(" ");

/// INGRESA DATOS SEGUNDA JUGADORA
let name2 = prompt("Segunda Jugadora: ingrese su nombre");
let puntajes2 += prompt("Segunda Jugadora: ingrese sus puntajes");
}
puntajes2 = puntajes2.split(" ");


/// COMPARACION Y RESULTADOS
let resultadoJugadora1 = 0;
let resultadoJugadora2 = 0;
let mensajeError = "";
let empates = 0;


for (let i = 0; i < 5; i++) {

    if (puntajes1[i] == puntajes2[i]) { /// EMPATE
        resultadoJugadora1 += 0;
        resultadoJugadora2 += 0;
        empates += 1;

    } else { /// NO EMPATE
        if (puntajes1[i] < puntajes2) {
            resultadoJugadora1 += 1;
            resultadoJugadora2 += 0;
        } else if ((puntajes2[i] > puntajes1[i]) {
            resultadoJugadora1 += 0;
            resultadoJugadora2 += 1;
        } else {
            mensajeError += `ERROR
            ${name1} en la jugada ${i + 1}: ${puntajes1[i]}
            ${name2} en la jugada ${i + 1}: ${puntajes2[i]}`;
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