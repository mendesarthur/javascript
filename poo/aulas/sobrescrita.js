class spaceship {
    constructor(name, crewQuant, maxVelocity){
        this.name = name
        this.crewQuant = crewQuant
        this.maxVelocity = maxVelocity
        this.velocity = 0
    }
    speedUp(acceleration){
        this.velocity += acceleration
        if(this.velocity < this.maxVelocity){
            console.log("Velocidade máxima ultrapassa, diminua ou causara danos a nave")
        }
    }
}

class transportSpaceship extends spaceship{
    speedUp(){
        console.log("A nave de transporte só pode acelerar 1 Km/s")
        this.velocity += 1
    }
}

let transporte = new transportSpaceship("Transporter", 8, 120)

transporte.speedUp()

console.log(transporte)