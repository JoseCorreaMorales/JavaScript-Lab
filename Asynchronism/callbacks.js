
suma = (a, b, callback) => callback (a + b);


const print = (result) => console.log (result);

suma (2, 3, print);

/* Esta es la forma en la que JS manejaba los proceso asincronos, designaba las tareas a otro proceso y 
    ncesitaba que le avisaran cuando el proceso terminaba, por eso se usaban los callbacks, para que cuando
    el proceso terminara, se ejecutara la funcion que se le pasaba como parametro, en este caso, la funcion
    printData.
*/
const getData = (callback) => {
    setTimeout(() => {
        callback({
            name: "Juan",
            age: 25
        });
    }, 3000); 

}

const printData = (data) => console.log(data);

getData(printData);

/* Callbacks and functions in deep: https://dev.to/i3uckwheat/understanding-callbacks-2o9e */