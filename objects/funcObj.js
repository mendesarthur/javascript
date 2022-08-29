let spaceship = {
    name: "Deméter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function(){
        console.log("Preparando propulsão")
        console.log("Ligando Computador de bordo.")
        console.log(this.name)
    }
}
spaceship.velocity = 0
spaceship.speedUp = function(aceleration){
    this.velocity += aceleration
}
console.log(spaceship)

spaceship.speedUp(10)

console.log(spaceship)