const ENDPOINTS = require('../helpers/urlhelper')
const aboutRouter = require('./about-router')
const generateResponse = require('../helpers/responseGenerator')

const handleRoutes = (req,res) => {
    const {url} = req
    
    switch(url){
        case ENDPOINTS.DEFAULT_ENDPOINT:
            console.log("Home page")
            break;
        case ENDPOINTS.ABOUT_ENDPOINT:
            aboutRouter.handleAboutRoutes(req,res)
            break;
        default:
            generateResponse(res,404,{"message": 'Any error occured'})

            
    }
}

module.exports = { handleRoutes }