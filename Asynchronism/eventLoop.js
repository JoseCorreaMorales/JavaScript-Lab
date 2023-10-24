console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
setTimeout(() => { // Se ejecuta despues de 2 segundos (2000 milisegundos)
    console.log("Task 4");
    // concurrente no bloqueante (no se bloquea el hilo principal) 
}, 2000);
console.log("Task 5");
console.log("Task 6");