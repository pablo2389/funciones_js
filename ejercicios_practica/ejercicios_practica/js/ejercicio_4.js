"use strict";
function generarInvitados() {
    let invitado1=prompt("ingresa el nombre del primer invitado:");
    let invitado2=prompt("ingresa el nombre del segundo invitado:");
    let invitado3=prompt("ingresa el nmbre del tercer invitado:");
    console.log("los invitados son:");
    console.log( ( (" 1)") + invitado1 ) + ( (" 2)") + invitado2 ) + ( (" 3)") + invitado3 ));
    let invitadosconcatenados = invitado1 + ", "+ invitado2 + ", "+ invitado3;
    return invitadosconcatenados;
}
let invitados = generarInvitados();
console.log(`mis invitados:${invitados}`);
/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada
Está función retorna una variable como retorno de salida

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán concatener en una sola variable
tipo texto

La función deberá retornar esta variable con los invitados concatenados
para que luego el sistema use esa variable "invidatos" para imprimir
en consola la lista

*/

// Definir y crear la función antes de esta llamada
