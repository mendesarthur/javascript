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
    reload(){
        this.shootleaft = 5
    }
}

let fenixWeapon = new SpaceShipWeapon(10)
try{
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
}catch(e){
    console.error(e.message)
    fenixWeapon.reload()
}finally{
    console.log("Arma deu bons tiros")
}

console.log(fenixWeapon)