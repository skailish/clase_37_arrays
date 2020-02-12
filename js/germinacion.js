// Germinación

// Crear un programa que permita ingresar una lista de flores y plantines(brote).La lista debe comenzar con una flor, si no lo hace debe mostrar un mensaje de error.El programa debe convertir los plantines en flores, tomando como referencia la primera flor que encuentre a su izquierda.Ejemplo:

// // Ingrese flores y plantines: rosabrotebrotebrotegirasolbrotebrotenomeolvidesbrotebrotebrotebrote
// ¡Las flores han germinado!: rosarosarosarosagirasolgirasolgirasolnomeolvidesnomeolvidesnomeolvidesnomeolvidesnomeolvides

let flores = prompt("Ingrese una lista de 'rosa', 'girasol', 'nomeolvides', cada una seguida de sus respectivos 'brote' ");
flores = flores.split(" ");
let duracion = flores;
let rosas = "rosa";
let girasoles = "girasol";
let nomeolvides = "nomeolvides";

for (let i = 0; i < duracion.length; i++) {
    if (flores[i] === "brote") {
        if (flores[i - 1] === "rosa") {

            rosas += " rosa";

        } else if (flores[i - 1] === "girasol") {

            girasoles += " girasol";

        } else if (flores[i - 1] === "nomeolvides") {

            nomeolvides += " nomeolvides";
        }
        flores.splice(i, 1);
    }
}

rosas.split(" ");
girasoles.split(" ");
nomeolvides.split(" ");

flores = rosas + girasoles + nomeolvides;
flores.split(" ");

alert("Las flores han germinado!\n" + flores);