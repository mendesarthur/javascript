let naveName = prompt("Informe o nome da nave: ")
let caracter = prompt("Qual caracter deseja substituir? :" )
let newCaracter = prompt("Informe o novo caracter: ")
let newName = ""

for(let i = 0; i < spaceShip.length; i++){
    if(spaceShip[i] == caracter){
        newName += newCaracter
    }
    else{
        newName += naveName[i]
    }
}
alert('O novo nome da nave é: ' + newName)