let string = "Hola Mundo";

console.log(string.length);
console.log(string.indexOf("Mundo"));
console.log(string.substr(5,2));
console.log(string.slice(5,7));

console.log(string.split(" "));

console.log(string.length);

console.log(string.replace("Mundo","World"));

console.log(string.toUpperCase());
console.log(string.toLowerCase());

const PI = Math.PI;


let n = Math.ceil(1.1);
let n2 = Math.floor(1.1);
let sqrt = Math.sqrt(n);

console.log(`ceil ${n} sqrt ${sqrt} floor ${n2}`);


let number1 = 20;
let number2 = '20';
let number3 = 50;

console.log(number1 + number2 + number3);

console.log(number1 - number2 + number3);


console.log(number1 + number3);
console.log(number1 + number2);
console.log(number1 - number3);

console.log(number1 + Number(number2) + number3);
console.log(number1 + parseInt(number2) + number3);


let tres = "tres";

console.log(typeof parseInt(number2))
console.log(typeof Number(tres))

console.log(Number(tres) + number1) //NoN


/* number a string */

let dato = 23123;
 let nuevoDato = String(dato);

console.log(dato.length) /* solo diponible para strings */
console.log(dato[0]) /* solo diponible para strings */
console.log(nuevoDato.length)
console.log(nuevoDato[0])


let cuatro = "cuatro";

stringCuatro = cuatro.toString();
console.log(stringCuatro.length, typeof(stringCuatro))




