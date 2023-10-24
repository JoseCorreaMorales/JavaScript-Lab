

/* @params: callback, callbackError
@description: This function is used to simulate a request to a server, and it returns a callback with the data
    or an error.
 */
const getData = (callback, callbackError) => {
    if (true) {
        setTimeout(() => {
            callback({
                name: "Juan",
                age: 25
            });
        }, 3000);
    } else {
        callbackError(new Error("Error inesperado"));
    }
}

const printData = (data) => console.log(data);
const errorHandler = (error) => console.log(error);

getData(printData, errorHandler);