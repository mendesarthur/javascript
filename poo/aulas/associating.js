class prof {
    constructor(name, age, gen){
        this.name = name
        this.age = age
        this.gen = gen
    }
}
class school{
    constructor(name, studantQuantities, profName, profAge, profGen ){
        this.name = name
        this.studantQuantities = studantQuantities
        this.prof = new prof(profName, profAge, profGen)
    }
}
let institute = new school("dom pedro", 45, "Matilde", 50, "Femino")

console.log(institute)