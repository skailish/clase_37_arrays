// Revertir array

// Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el array inverso.Ejemplo:

// // Ingrese números: 5 7 99 34 54 2 12

// // El array invertido es: [12, 2, 54, 34, 99, 7, 5]

let list = prompt("Ingrese una lista de números separados por espacio");

let duration = list; //// si no lo defino ANTES de hacer split, luego cuando le hago el pop() a list, duration tambièn cambia, aun cuando el pop() se hace dentro de un for.... es decir, pareciera que volviera a asignar el valor actualizado de "list" a "duration".. (¿¿¿¿)

list = list.split(" ");
duration = duration.split(" ");

let reverseList = "";

for (let i = 0; i < duration.length; i++) {

    reverseList += " " + list.pop();

}

reverseList = reverseList.split(" ");
reverseList.shift();
alert("La antigua lista era:\n" + duration + "\n\nLa nueva lista es:\n" + reverseList);