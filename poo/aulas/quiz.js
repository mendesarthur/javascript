class SpacialStation {
    constructor(name, size) {
        this.name = name
        this.size = size
    }
}
class ResourceProcessor {
    constructor(name, size) {
        super(name, size)
    }
    totalLoadProcessedInaWeek() {
        (this.size * 1.4) / 4
    }
}

let resouceProcessor = new ResourceProcessor("Mineradora", 120000)

resouceProcessor.totalLoadProcessedInaWeek()