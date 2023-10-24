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
const getData2 = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                name: "Pepe",
                age: 25
            })
        }, 3000);
    }
    else {
        reject(console.error("Error inesperado en getData2"));
    }
})

const main = async () => { 
    try {
        let res = await getData(false);
        let res2 = await getData2(true);
        console.log(res);
        console.log(res2);        
    } catch (error) {
        console.error(error);
    }
}


main();