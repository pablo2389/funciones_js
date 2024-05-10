"use strict";

/* Inove Coding School
 * Ejercicios de funciones
 */

// Ejercicios con funciones

function imprimirMayor(numero1,
    numero2) {
    console.log("Funcion imprimir mayor")
    function imprimirMayor(numero1,numero2){
        console.log("funtion imprimir mayor");
        if(numero1>numero2){
            console.log(`el numero ${numero1} es mayor que ${numero2}.`);
        }else if( numero2>numero1){
            console.log(`el numero ${numero2} es mayor que ${numero1}.`);
        }else{
            console.log("ambos numeros son iguales.");
        }
            
    
    }
    imprimirMayor(2,1);

    // En esta función debe determinar cual de los dos
    // números ingresados por parámetro es mayor
    // y luego imprimir dicho valor en consola
}

imprimirMayor(2, 10);