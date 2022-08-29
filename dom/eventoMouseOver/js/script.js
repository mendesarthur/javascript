// Evento de mouseover

let title = document.querySelector("#title")

title.addEventListener("mouseover", function(){
    this.style.background = "yellow"
})


// Evento mouseout
title.addEventListener("mouseout", function(){
    this.style.background = "white"
})

// Afetar outro elemento com mouseover

let subtitle = document.querySelector(".subtitle")

subtitle.addEventListener("mouseover", function(){
    let legenda = document.querySelector("#legenda")

    legenda.classList.remove("hide")
})

subtitle.addEventListener("mouseout", function(){
    let legenda = document.querySelector("#legenda")

    legenda.classList.add("hide")
})
