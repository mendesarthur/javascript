let pessoa = {
    nome: 'Arthur',
    idade: 15,
    dizerOla(){
        console.log('Olá, mundo! Meu nome é, ' + this.nome)
    }
}
console.log(pessoa.dizerOla())
