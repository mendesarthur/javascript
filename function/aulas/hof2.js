const greet = (name) =>{
    return "hello" + ', ' + name
}

function speekToMary(dialog){
    const text = dialog("mary")
    return "he says " + text
}
console.log(speekToMary(greet))