console.log('Hola, el archivo se vinculo correctamente');
//_______________________________________________________________________________________________________________________
// 1.  Hacer un programa que reciba 2 números del usuario y los sume.

// Es una secuencia
/*let número1 =0;
let número2 =0;
let resultado =0;*/

// variable = asignación
// TODO LO QUE VIENE DE PROMPTS O DEL USUARIO VIENE COMO STRING
// Vamos a convertir el texto en número

/*número1 = prompt('Ingrese el primer número');
número2 = prompt('Ingrese el segundo número');*/

// parceFloat -> convierte a decimales
// parceInt -> convierte a enteros
/*resultado = parseFloat(número1) * parseFloat(número2);
alert('El resultado de la multiplicacion de: ' + número1 + '*' + número2 + ' es ' + resultado);
*/


// _______________________________________________________________________________________________________________________
//2. Hacer un programa que reciba un nombre por parte del usuario, si se recibió nombre por parte del usuario, saludarlo con nombre, si no, sólo decir 'Hola'

/*let nombreUsuario = prompt('Ingrese su nombre')/*
// if -> si se cumple una condicion, haga...
// else -> si no se cumple una condicion, haga otra cosa

/*variable = '' -> false -> No
variable = 'santiago' -> true -> si

SOLO SE EJECUTA LO DEL IF CUANDO LA CONDICIÓN SE CUMPLE, ES DECIR QUE SEA VERDADERA -> TRUE */

/*if(nombreUsuario){
    alert('Hola ' + nombreUsuario)
    console.log('se cumple la condición');
}else{
    alert('Hola');
    console.log('no se cumple la condición');
}
*/

// _______________________________________________________________________________________________________________________
//3. Hacer un programa que pida al usuario un número entero y muestre los valores desde cero hasta el número ingresado.
/*let numero = parseInt(prompt('Ingrese un número entero'));
for(let i = 0 ; i<= numero ; i++){
    console.log(i);
}
*/



// ________________________________________________________________________________________________
//5. Hacer un programa que muestre los días de la semana.
// alt + 91 o shift + {}
/*let diasSemana = ['lunes' , 'martes' , 'miercoles' , 'jueves' , 'viernes' , 'sábado' , 'domingo'];

// mostrando el dia de la semana
console.log(diasSemana);
// mostrando un elemento dentro del arreglo, usando su indice

// el nombreDelArreglo [el index]
/*console.log(diasSemana[0]);
console.log(diasSemana[1]);
console.log(diasSemana[2]);
console.log(diasSemana[3]);
console.log(diasSemana[4]);
console.log(diasSemana[5]);
console.log(diasSemana[6]);*/

// OPCION OPTIMIZADA CON CICLOS
// ForEach -> es un ciclo para recorrer arreglos de datos

/*diasSemana.forEach(
    // función flecha -> FUNCIONES -> Acciones que se deben ejecutar
    (dia) => {
        console.log(dia);
    }
)
*/

// _________________________________EJERCICIOS 4 , 6 TAREA___________________________

// 4. Hacer un programa que solicite al usuario un texto, si el usuario no ingresa nada seguir solicitando hasta que lo haga.

/*let texto = "";

while (texto === "") {
  texto = prompt("Por favor, ingresa un texto:");
}

alert("Gracias, has ingresado: " + texto);
*/

// 6. Hacer un programa que pida al usuario dos números, mostrar la suma y la resta del primer número y el segundo número. 

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

let suma = num1 + num2;
let resta = num1 - num2;

alert("La suma de los dos números es: " + suma);
alert("La resta del primer número menos el segundo es: " + resta);
