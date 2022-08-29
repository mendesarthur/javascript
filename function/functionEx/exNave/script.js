function slowDown(velocity, printer){
    let decelaration = 20
    while(velocity > 0){
        velocity -= decelaration
    }
    alert('Nave parada, As comportas podem ser abertas')
}

let spaceShipVelocity = 150

slowDown(spaceShipVelocity, function(velocity){
    console.log('velocidade atual: ' + velocity)
})