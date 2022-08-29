class Soma {
    constructor(num1, num2){
    this.num1 = num1
    this.num2 = num2
}
    get add(){
        return parseInt((this.num1 * this.num2))
    }
}

let soma = new Soma(2, 5)
console.log(soma.add)

