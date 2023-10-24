
/*  declaration */
function hello(name = "default") {
    return `Hello ${name}`
}

console.log(hello())


/* expression */
let greeding = (name = "default") => `Hello ${name}`
console.log(greeding("Jose"))


let arrow = (param1 = "Hello", param2 = "🌍") => ({value1: param1, value2: param2}) 

console.log(arrow());


/* IIFE */

((JS) => {
    console.log(`learning ${JS}`)
})('JavaScript');



/* metodos de propiedad */

const music = {
    play: function(song = 'fly  me to the moon') {
        console.log(`playing ${song}`);
    },

    pause: (song = 'fly me to the moon') => {
        console.log(`${song} paused`);
    }
}

music.delete = function () {
    console.log(`song deleted!`)
}

music.play('fly  me to the moon');
music.pause('fly  me to the moon');
music.delete();


