let array1 = [10, 12.1, true, false, "string", 'string', []];
let array2 = new Array(10, 12.1, true, false, "string", 'string', []);
let array3 = ['Enero', 'Febrero', 'Marzo']

array3.shift('Enero')
array3.unshift('Enero')

array3.push('Mayo')

arr1_y_dos = array1.concat(array2)

console.log(array1);
console.log(array2);

let a = array1.sort();

console.log("a: " + a);
console.log("array1: " + array1);


let numbers = [11, 100, 2, 33,  432, 42, 22, 446, 63, 1]


console.log("numeros: " + numbers.sort())


orderedNumbers = numbers.sort( (a, b) => a - b)

console.log(orderedNumbers)

/* usando CONST */

const constArray = [1, 2, 3]

/* puede ser modificado individualmente, pero no el elementos completo */
constArray[0] = 0
constArray = [] /* No es posible */

console.log(constArray)