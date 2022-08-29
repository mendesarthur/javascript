class ResourceProcessStation{
    constructor(name, monthlyProcessedLoad){
        this.name = name
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }
    get weekly(){
        return this.monthlyProcessedLoad / 4
    }
}

let resourceProcessStation = new ResourceProcessStation("Phoenix", 890)

console.log(resourceProcessStation.weekly)

resourceProcessStation.monthlyProcessedLoad = 350

console.log(resourceProcessStation.weekly)