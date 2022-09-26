// criar um elemento

let el = document.createElement("h3")

el.classList = "testando-classe"

let texto = document.createTextNode("Este é o texto")

el.appendChild(texto)

console.log(el)

// Selecionar o elemento que quero trocar

let title = document.querySelector("#title")

// Selecionar o pai do el

let pai = title.parentNode

// trocar os elemenos

pai.replaceChild(el, title)