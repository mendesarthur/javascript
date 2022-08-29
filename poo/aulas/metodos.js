class spaceShip {
    constructor (name){
        this.name = name
        this.velocity = 0
    }

    speedUp(aceleration){
        this.velocity += aceleration
    }
}

let artemis = new spaceShip("Artemis")

artemis.speedUp(10)
artemis.speedUp(20)
console.log(artemis)