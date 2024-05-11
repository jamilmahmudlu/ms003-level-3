const fs = require('fs')
const path = require('path')
const util = require('util')
const generateUniqueId = require('../helpers/generateUniqueId')

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

const parentFolder = path.join(__dirname, '..')
const DATABASE_PATH = path.join(parentFolder, 'database/db.json')

async function getAbout(){
    const result = await readFileAsync(DATABASE_PATH)
    const myAllData = JSON.parse(result)
    return myAllData.abouts
}

async function createAbout(about) {
    const result = await readFileAsync(DATABASE_PATH)
    const myAllData = JSON.parse(result)

    const newAbout = {"id": generateUniqueId(myAllData.abouts), ...about}
    myAllData.abouts.push(newAbout);
    await writeFileAsync(DATABASE_PATH, JSON.stringify(myAllData, null, 2))
    return newAbout
}

module.exports = {
    getAbout,
    createAbout
}