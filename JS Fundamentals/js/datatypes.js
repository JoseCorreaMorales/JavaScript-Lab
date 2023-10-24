/* primitivos (por valor)*/
typeof undefined 
typeof true
typeof 1
typeof 1.1
typeof "string"
typeof 2n
typeof Symbol()

typeof null

/* objetos (por referencia) */
let object = {
    nombre : "John",
    age : 30
}

typeof []
typeof {}
typeof function(){}
const set = new Set();
const map = new Map();
let date = new Date();
typeof set
typeof map
typeof date

console.log(typeof function(){});


/* se comparan por referncia  y la direccion de la memmoria es diferente*/
console.log({} === {}); // false === compara el valor y el tipo y  == compara solo el valor
console.log('5' == 5); // false
console.log({a : 1} === {a : 1}); // false

console.log(null === null); // true