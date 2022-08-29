// Exemplo 1
// function doubleVelocity(velocity, printer){
//     console.log("Entramos em double velocity")
//     let newVelocity = velocity * 2
//     printer(newVelocity)
//     return newVelocity
// }

// let printVelocity = (velocity) =>{
//     console.log("Nova velocidade: " + velocity + "Km/s")
// }

// let newVelocity = doubleVelocity(60, printVelocity)
// console.log(newVelocity)

// Exemplo 2

function doubleVelocity(velocity, printer){
    console.log("Entramos em double velocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

let anotherVelocity = doubleVelocity(50, (velocity) =>{
    console.log("Nova velocidade: " + velocity +" Km/s")
})
