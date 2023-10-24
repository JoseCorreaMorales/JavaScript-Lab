/* var let const */


/* puede ser re-declarada y re-asignada */
var nombre = 'John';
var nombre = 'Peter';

console.log(nombre); 

/* peude ser re-asignada y no re-declarada */
let nombre2 = 'John';
    nombre2 = 'Peter';
/* let nombre2 = 'Peter';  X*/


/* puede ser declarada y asignada una sola vez */
const  nombre3 = 'John';
/* nombre3 = 'Peter';  X*/

/* const nombre4;
nombre4 = 'Peter'; la declaracion debe ser inicializada */

const nombre5 = undefined;


let a = "aprendiendo";
let b = "JS";

console.log(a + " " + b);
console.log(a,b);
console.log(`${a} ${b}`); /* template literals */
    