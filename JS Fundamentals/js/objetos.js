let person = {
    name: 'Jhon',
    lastname: 'Doe',
    email: 'mail@domaim.com',
    age: 20,
    music: ['Rock', 'Pop', 'Classic'],
    city: {
        country: 'Mexico',
        state: 'Mich'
    },
    birth: function () {
        return new Date().getFullYear() - this.age;
    }

}

console.log(person)
console.log(person.name)
console.log(person.music)
console.log(person.music[0])
console.log(person.birth())



const cars = [
    { model: 'Audi', engine: 2.1 },
    { model: 'Ferrari', engine: 24.1 },
    { model: 'BMW', engine: 3.2 },
]


cars.forEach((car) => {
    console.log(car.engine)
})

for (let index = 0; index < cars.length; index++) {
    console.log(`${cars[index].model}, ${cars[index].engine}`)
}