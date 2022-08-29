class spaceship {
    constructor(name, maxCrew, maxVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxVelocity = maxVelocity
        this.velocity = 0
    }
    speedUp(acceleration){
    this.velocity += acceleration
    if(this.velocity >= this.maxVelocity){
        console.log("Diminua ou causara danos a nave!!")
    }
    }
}

class batalha extends spaceship{
    stop(){
        this.velocity = 0
        console.log("Recolhendo armas e parando a nave!")
    }
}

class discovery extends spaceship{
    stop(){
        this.velocity = 0
        console.log("Recolhendo ferramentas de pesquisa...")
    }
}

let tebas = new discovery("Tebas", 23, 250)
let phoenix = new batalha("Phoenix", 7, 200)

tebas.speedUp(245)
phoenix.speedUp(200)

phoenix.stop()
tebas.stop()

console.log(phoenix)
console.log(tebas)
