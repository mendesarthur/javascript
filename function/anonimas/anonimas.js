// função padrão
function somar(a, b){
    let soma = a + b
    return soma
}
// console.log(somar(6, 76))

// função anonima
const mult = function (a, b){
    let soma = a * b
    return soma
}

console.log(mult(5, 7))


// arrow function

const div = (a, b) =>{
    return a / b   
}
console.log(div(64, 8))