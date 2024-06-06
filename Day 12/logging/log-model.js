class LogModel{
    constructor(metadatas){
        this.informations = {
            date: Date.now(),
            ...metadatas
        }
    }
}

module.exports = LogModel