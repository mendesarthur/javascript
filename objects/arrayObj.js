//Array de objetos
// let spaceShip = [
//     {name: "Colossus", crewQuantities: 10},
//     {name: "Phoenix", crewQuantities: 12},
//     {name: "Estelar", crewQuantities: 20}
// ]
// console.log(spaceShip[1].crewQuantities)

// Percorendo o array de obejetos
let spaceShip = [
    {name: "Colossus", crewQuantities: 10},
    {name: "Phoenix", crewQuantities: 12},
    {name: "Estelar", crewQuantities: 20}
]
spaceShip.forEach((spaceShip) =>{
    console.log(spaceShip.name + " Tem " + spaceShip.crewQuantities + " Tripulantes")
})