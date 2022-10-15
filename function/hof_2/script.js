
// Exemplo 1:
function speek(sayHello, name, saudacao){
    const conversa = saudacao(sayHello, name)
    return conversa
}

console.log(speek('ola', ', mary', function(sayHello, name){
    return sayHello + name
}))

//Exemplo 2:

function calc(a, b, op){
    const resultado = op(a, b)
    return resultado
}
function mult(x, y){
    return x * y
}

function sub(x, y){
    return x - y
}


console.log(calc(20, 2, function(a, b){
    return a / b
}))