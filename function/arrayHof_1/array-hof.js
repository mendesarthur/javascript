const personagens = [
    {nivel: 42, nome: "Thrall", raca: "Orc", classe: "xamã"},
    {nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro"},
    {nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro"},
    {nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino"},
    {nivel: 26, nome: "Janaina", raca: "Humano", classe: "Maga"},
    {nivel: 39 , nome: "Tyrande", raca: "Elfo Noturno", classe: "xamã"},
]

// Map

// const nomes = []

// for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome)
// }

const nomes = personagens.map(function(personagens){
    return personagens.nome
})

// console.log(nomes)


// Filter

// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
//     if(personagens[i].raca === 'Orc'){
//         orcs.push(personagens[i])
//     }
// }

const orcs = personagens.filter(function (personagens){
    return personagens.raca === 'Humano'
})

console.log(orcs)


// Reduce 

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)

// console.log(nivelTotal)

const raca = personagens.reduce(function(valorAcumulado, personagem){
    if(valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    }
    else{
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
},{})

// console.log(raca)


// Sort

const personagensOrdenados = personagens.slice().sort(function(a, b){
    return a.nivel - b.nivel
})

console.log(personagens)
