let hitchedSpaceships = ["Demeter", "Darwin", "Voyager", "Falcon"]

let upcasedSpaceships = hitchedSpaceships.map(function(current, index){
    let upcased = current.toUpperCase()
    return upcased
})

console.log(upcasedSpaceships)