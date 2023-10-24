let object = {
    uName: "John",
    lastname: "Doe",
    phone: 555555
}


/* in for objects */
for(let value in object){
    console.log(value, object[value])
}


let array = new Array(1, 2, 3, 4)
var string = 'string'
/* of for iterables */
for(value of string) {
    console.log(value)
}