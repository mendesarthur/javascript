let hitchedSpaceships = ["Demeter", "Darwin", "Voyager", "Falcon"]

let with7Chars = hitchedSpaceships.filter(element => {
    return element.length >= 7
})
console.log(with7Chars)