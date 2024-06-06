const fs = require('fs')
const path = require('path')
const util = require('util')

const DB_PATH = path.join(__dirname, '..', 'database/db.json')

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class DatabaseLogger{
    constructor(logModel) {
        this.logModel = logModel
    }

    async log() {
        const allData = await readFileAsync(DB_PATH)
        const myJsonData = JSON.parse(allData)
        myJsonData.logs.push(this.logModel)
        await writeFileAsync(DB_PATH, JSON.stringify(myJsonData,null,2))
    }
}

module.exports = DatabaseLogger