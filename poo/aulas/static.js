class ResourceProcessedStation{
    constructor(name, monthlyProcessed){
        this.name = name
        this.monthlyProcessed = monthlyProcessed
    }
    static calculateProcessInHours(monthlyProcessed, hours){
        return monthlyProcessed / 720 * hours
    }
}

let processor = new ResourceProcessedStation("Gaia", 500)

let totalProcessed = ResourceProcessedStation.calculateProcessInHours(processor.monthlyProcessed, 12)

console.log(totalProcessed)
