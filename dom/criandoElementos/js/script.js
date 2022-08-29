// Inserir o elemento no body
let novoParagravo = document.querySelector("p")

console.log(novoParagravo)

let texto = document.createTextNode("Este é o conteúdo do paragráfo")

novoParagravo.appendChild(texto)

console.log(novoParagravo)

let body = document.querySelector("body")

console.log(body)

body.appendChild(novoParagravo)

// Inserir um container

let container = document.querySelector("#container")

console.log(container)

let el = document.createElement("span")

el.appendChild(document.createTextNode("Texto do span"))

console.log(el)

container.appendChild(el)