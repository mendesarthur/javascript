class spaceship {
    constructor(name, type = "Descoberta"){
        this.name = name
        this.type = type
    }
}

let mySpaceship = new spaceship("Demeter")
let otherSpaceship = new spaceship("Phoenix", "Exploração")

console.log(mySpaceship)
console.log(otherSpaceship)