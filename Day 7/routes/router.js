const generateResponse = require('../utils/responseGenerator')
const urlhelper = require('../utils/urlhelper')
const userRoutes = require('./userRoutes')

const handleRoutes = (req,res) => {
    const {url} = req

    let newUrl = `/${url.split('/')[1]}`
    
    switch(newUrl){
        case urlhelper.DEFAULT_ENDPOINT:
            console.log("Home page")
            break;
        case urlhelper.USER_ENDPOINT:
            userRoutes.handleUserRoutes(req,res)
            break;
        default:
            generateResponse(res,404,{"message": 'Any error occured'})

            
    }
}

module.exports = { handleRoutes }