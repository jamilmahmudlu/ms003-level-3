const generateResponse = require('../utils/responseGenerator')
const urlhelper = require('../utils/urlHelper')
const { handleCategoryRouter } = require('./categoryRouter')
const { handleDefaultRouter } = require('./defaultRouter')
const { handleProductRouter } = require('./productRouter')

const handleRoutes = (req,res) => {
    const {url} = req

    let newUrl = `/${url.split('/')[1]}`
    
    switch(newUrl){
        case urlhelper.DEFAULT_ENDPOINT:
            handleDefaultRouter(req,res)
            break;
        case urlhelper.CATEGORY_ENDPOINT:
            handleCategoryRouter(req,res)
            break;
        case urlhelper.PRODUCT_ENDPOINT:
            handleProductRouter(req,res)
            break;
        default:
            generateResponse(res,404,{"message": 'Any error occured'})
 
    }
}

module.exports = handleRoutes 