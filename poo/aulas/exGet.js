class Nota{
    constructor(materia, participacao, prova, trabalho){
        this.materia = materia
        this.participacao = participacao
        this.prova = prova
        this.trabalho = trabalho
    }
    get media(){
        return parseInt((this.participacao + this.prova + this.trabalho)) /3
    }
}
let nota = new Nota('matematica', 5, 6, 7) 

console.log(nota.media)