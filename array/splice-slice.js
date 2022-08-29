//Splice (altera o array original)
// let spaceShips = ["Elemental", "Darwin", "Artemis", "Supernova"]

// let removedShips = spaceShips.splice(1, 2, "Demter", "Plutão", "Jaspeon")

// console.log(spaceShips)

//slice (Obs: não altera o array original)
let spaceShips = ["Elemental", "Darwin", "Artemis", "Supernova"]

let removedNames = spaceShips.slice(1, 3)

console.log(spaceShips)

console.log(removedNames)