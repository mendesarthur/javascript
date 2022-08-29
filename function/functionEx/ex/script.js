let spaceShip = prompt('Digite o nome da nave: ')

let spaceShipVel = 0

let chosenOption

function menu(){
    let option
    while(option != '1' && option != '2' && option != '3' && option != '4'){
        option = prompt('O que deseja fazer?\n' +
        '1- Acelerar a nave em 5km/s\n' +
        '2- Desacelerear a nave em 5km/s\n' +
        '3- Imprimir dados de bordo\n' +
        '4- Sair do programa')
    }
    return option
}

function speedUp(vel){
    newVel = vel + 5
    return newVel

}

function speedDown (vel){
    let newVel = vel - 5
    if(newVel < 0){
        newVel = 0
    }
    return newVel
}
function spaceShipbord(name, vel){
    alert('Espaçonave: ' + name + '\nVelocidade: ' + vel + 'Km/s')
}
do{
    chosenOption = menu()
    switch(chosenOption){
        case'1':
        spaceShipVel = speedUp(spaceShipVel)
        break
        case '2':
        spaceShipVel = speedUp(spaceShipVel)
        break
        case '3':
        spaceShipbord(spaceShip, spaceShipVel)
        break
        default:
        alert('Encerrando programa de bordo')    
    }

}while(chosenOption != '4')