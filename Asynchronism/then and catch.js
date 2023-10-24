/*  
las promesas nos ayudan a resolver o trabajar con los procesos asincronos, cuando enviamos una tarea a
un segundo proceso lo podemos envolver un una promesa y cuando este sea resuelto, lo enviamos en el callback
    resolve, y si ocurre un error lo enviamos en el callback reject.
*/

const getData = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                name: "Juan",
                age: 25
            })
        }, 3000);
    }
    else {
        reject(console.error("Error inesperado"));
    }
})


const getData2 = (error) => new Promise((res, rej) => {
    if (!error) {
        setTimeout(() => {
            res({
                name: "Pepe",
                age: 22
            })
        }, 3000);
    } else {
        rej(console.error("Error inesperado en getData2"));
    }
})

/* then y catch son metodos de la promesa  y reciven como paramentro un callback estos ademas
 son procesos no no bloqueantes */

//getData(false).then(() => {}).catch(() => {});

/* then recibe un callback que se ejecuta cuando la promesa se resuelve, y catch recibe un callback que se ejecuta
    cuando la promesa se rechaza. */
console.log("Start ");
getData(false)
    .then((data) => {
        console.log(data);
        return getData2(true); // encadenamiento de promesas, se ejecuta la segunda promesa cuando la primera se resuelve
    }).then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error); // con un solo catch podemos manejar todos los errores de las promesas
    });

console.log("End ");

