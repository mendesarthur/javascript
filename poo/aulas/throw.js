class SpaceShipWeapon{
    constructor(identifier) {
        this.identifier = identifier
        this.shotsleaft = 5
    }
    shoot(){
        if(this.shotsleaft > 0){
            console.log("Bang!")
        }
        else{
            throw new Error("Arma " + this.identifier + " Sem munição");
        }
        console.log("Bang!")
        this.shotsleaft -= 1
    }
}

let fenixWeapon = new SpaceShipWeapon(10)
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
console.log(fenixWeapon)