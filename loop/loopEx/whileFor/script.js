let spaceShip = prompt("Qual o nome da nave? :")
let invertido = ""
for(let i = spaceShip.length -1; i >= 0; i-- ){
    invertido += spaceShip[i]
    if(spaceShip[i] == "e"){
        break
    }
}
alert(`Nome original :${ spaceShip} 
Nome invertido: ${invertido}` )