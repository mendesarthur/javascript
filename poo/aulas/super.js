class Spaceship {
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

class TransportSpaceship extends Spaceship{
  constructor(name, crewQuant, maxVelocity, maxLoadweigth){
    super(name, crewQuant, maxVelocity)
    this.maxLoadweigth = maxLoadweigth
  } 
  speedUp(acceleration){
    this.acceleration /= 2
    console.log("Incrementando velocidade em " + acceleration + " Km/s")
    super.speedUp(acceleration)
  }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 200, 500)

console.log(transportSpaceship)

transportSpaceship.speedUp(410)

