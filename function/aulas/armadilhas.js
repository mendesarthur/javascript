// function greetPilot(name, message = "Olá"){
//     console.log(message + ", " + name)
// }
// greetPilot()

function speedUp(vel,acl, unit = "Km/s"){
    let newVel  = vel + acl
    console.log("Nova velocidade: " + newVel + unit)
}
speedUp(60, 20)