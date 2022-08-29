let navName = prompt("Informe o nome da nave, Por favor!")
let chosenOption = ""
let dobra = 0

chosenOption = prompt("Deseja entrar em dobra espacial\n1-Sim\n2-Não")

while(chosenOption == "1"){
   dobra +=1
   chosenOption = prompt("Deseja entrar em dobra espacial\n1-Sim\n2-Não")
}
if(chosenOption == "2"){
    alert(` 
    Nome da nave: ${navName} 
    Número de dobras: ${ dobra}`)
}
else if(chosenOption != "2" || "1"){
    alert("Resposta invalida")
}