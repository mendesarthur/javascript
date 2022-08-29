// Inserir click
let btn = document.querySelector("#btn")

console.log(btn)

btn.addEventListener("click", function(){
    
    console.log("clicou!")
    
    this.style.color = "red"
})

// Click afetando outros elementos
let title = document.querySelector("#title")

title.addEventListener("click", function(){
    
    let subtitle = document.querySelector(".subtitle")

    subtitle.style.display = "none"
})

// Double click

let subtitle = document.querySelector(".subtitle")

subtitle.addEventListener("dblclick", function(){

    console.log("click duplo!")
    this.style.color = "green"
})