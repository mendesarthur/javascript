class Magia {
    constructor(spell) {
        this.masFlam = spell
        this.mana = 3000
    }
    baterMagia() {
        if (this.mana > 1100) { // se a mana for maior que 1100
            console.log("Exevo gran mas flam") // soltar exevo gran mas vis
            this.mana -= 1100 // diminui em 1100 de mana
        } else {
            throw new Error("Mana insuficiente para usar " + this.masFlam) // quando nao houver 1100 de mana ele emite o erro
        }
    }
    potar() {
        while(this.mana < 1100){
            this.mana += 200
            console.log("Potando mana")
        }
    }
}

let ue = new Magia("Exevo gran mas flam")
console.log(ue)
try {
    ue.baterMagia()
    console.log(ue);
    ue.baterMagia()
    console.log(ue)
    ue.baterMagia()
 
} catch (e) {
    console.log(e.message)
    ue.potar()  
}
console.log(ue);