// Arrays iguales

// Crear un programa que permita ingresar dos listas de valores separados por espacio y muestre en un mensaje si las listas son iguales o no(mismos valores en mismo orden).Ejemplo:

// // Ingrese valores de lista 1: 10 25 6 33 48 105
// // Ingrese valores de lista 2: 10 24 6 33 48 105

// // Las listas no son iguales

let list1 = prompt("ingrese una lista de números espaciados");
let list2 = prompt("Intente repetir la lista");
let areSame = "";
list1 = list1.split(" ");
list2 = list2.split(" ");

if (list1.length != list2.length) {

    areSame = "Las listas no son iguales";

} else {
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] === list2[i]) {
            areSame = "Las listas son iguales";
        } else {
            areSame = "Las listas no son iguales";
        }

    }
}

alert(list1 + "\n" + list2 + "\n" + areSame);