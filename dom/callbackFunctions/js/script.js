function exibir(num){
    console.log("A operação resultou em: " + num)
}

function soma(a, b, callback){
    let op = a + b
    callback(op)
}

function mult(a, b, cb){
    let op = a * b
    cb(op)
}

soma(2, 4, exibir)

mult(4, 6, exibir)
