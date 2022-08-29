const testingArrow = {
    name: "Escola de javascript",
    normalFunction: function (){
        console.log(this.name)
    },
    arrowFunction: () => {
        console.log(this.name)
    }
}

testingArrow.normalFunction()
testingArrow.arrowFunction()