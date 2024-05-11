const parseRequestBody = require('../helpers/parser')
const generateResponse = require('../helpers/responseGenerator')
const aboutService = require('../services/about-service')

const getAboutInfo = async (req,res) => {
    // service working
    const result = await aboutService.getAbout()
    generateResponse(res, 200, result)
}

const createAbout = async(req,res) => {
    const body = await parseRequestBody(req)
    const addNewRecord = await aboutService.createAbout(body)
    generateResponse(res,201, addNewRecord)
}

module.exports = {
    getAboutInfo,
    createAbout
}