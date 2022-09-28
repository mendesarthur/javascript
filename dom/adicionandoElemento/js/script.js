// Criar elemento

let el = document.createElement("div")

el.classList = "div-criada"

console.log(el)

let container = document.querySelector("#container")

// Inserindo elemento filho
container.appendChild(el)

//inserBefore - insere antes

let el2 = document.createElement("div")

el2.classList = "div-before"

let el3 = document.querySelector("#container .div-criada")
