const fs = require('fs')
const path = require('path')


const getAllCountries = (res) => {
    const parentFol = path.join(__dirname, '..')
    const dbJsonPath = path.join(parentFol,'db.json')
    // console.log(fs.readFile(__dirname))
    const data = fs.readFile(dbJsonPath, 'utf-8', (err,data) => {
        if (err) {

        }

        const counData = JSON.parse(data).countries
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.write(JSON.stringify(counData))
        res.end()
    })
    // console.log(data)
}

const countryActions = {
    getAllCountries
}

module.exports = countryActions