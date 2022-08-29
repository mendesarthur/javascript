const funcao1 = () =>{
    console.log("Sou a função1")
    const valor = true
    try{
        if(valor){
            throw new Error("Deu error no valor")
        }
    }
    catch(error){
        console.error(error)
        throw error
    }

}
const funcao2 = () =>{
    console.log("Sou a função2")

    asdf
}
const main = () => {
    try {
        funcao1()
        funcao2()
    } catch (error) {
        console.error(error)
    }
    console.log("Passou por aqui")
}
main()