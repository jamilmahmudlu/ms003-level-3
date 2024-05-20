const fs = require('fs')
const path = require('path')
const util = require('util')
const generateUniqueId = require('../utils/generateUniqueId')
const getRootPath = require('../utils/root-path')



const DATABASE_PATH = path.join(getRootPath(), 'database/db.json')

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

async function getAllJSONData() {
    const allText = await readFileAsync(DATABASE_PATH)
    const myAllData = JSON.parse(allText)
    return myAllData
}

async function getData(key) {
    const myAllData = await getAllJSONData()
    return myAllData[key]
}

async function insertData(jsonKey, model) {
    const myAllData = await getAllJSONData();
    const newModel = {"id": generateUniqueId(myAllData[jsonKey]), ...model}
    myAllData[jsonKey].push(newModel)
    await writeFileAsync(DATABASE_PATH, JSON.stringify(myAllData,null,2))
    return newModel
}

module.exports = {
    getAllJSONData,
    getData,
    insertData
}