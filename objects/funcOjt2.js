let ex = {
    name: "peter",
    age: 40,
    gen: "mas",
    hobies: ["Ler", "Jogar", "Programar"],
    motherInfos:{
        name: "bruna",
        nacionality: "mexicana"
    },
}
ex.motherInfos.age = ""
ex.motherInfos.bornDate = function(dataNas, date){
    this.age = dataNas - date 
}
ex.motherInfos.bornDate( 1956 ,2022)
console.log(ex)