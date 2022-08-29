let spaceship = {
    name: prompt('Qual o nome da nave?'),
    type: prompt('Qual o tipo da nave?'),
    maxVelocity: parseInt(prompt('Qual a velocidade maxima da nave?')), //para que não entre em combustão (km/s)
    velocity: 0
}

function options(){
    let optionUser = prompt('Você quer acelerar ou parar a nave?')

    switch(optionUser){
        case 'acelerar':
            let acceleration = parseInt(prompt('Em quantos km/s quer acelerar a nave?'))
            if(spaceship.velocity+acceleration > spaceship.maxVelocity){ 
                alert(`A velocidade máxima da nave é de ${spaceship.maxVelocity} km/s\n
                Você não pode ultrapassar isso!`)
                options()
                break;
            }
            spaceship.velocity += acceleration
            options()
            break;
        case 'parar':
            alert(`Características da nave:\n
            Nome: ${spaceship.name}\n
            Tipo: ${spaceship.type}\n
            Velocidade máxima: ${spaceship.maxVelocity}\n
            Velocidade em que estava: ${spaceship.velocity} km/s`)
            break;
        default:  
            alert('Opções válidas: acelerar, parar')
            options()
            break;
    }
}

options()