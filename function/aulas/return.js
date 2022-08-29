function speedUp (vel, acl){
    let newVel = vel + acl
    console.log("Nova velocidade:" + newVel)
    return newVel
}

let vel = 70
let acl = 5

console.log(vel)

vel = speedUp(vel, acl)

console.log(vel)