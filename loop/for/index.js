let spaceShip = "helmet"
let newSpaceship = ""

for(let i = 0; i < spaceShip.length; i++){
    if(spaceShip[i] == "e"){
        newSpaceship += "i"
    }
    else{
        newSpaceship += spaceShip[i]        
    }
}
console.log(newSpaceship)