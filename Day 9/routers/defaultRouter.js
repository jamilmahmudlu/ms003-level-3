const { DEFAULT_ENDPOINT } = require('../utils/urlHelper')
const defaultController= require('../controllers/defaultController')

const handleDefaultRouter = (req, res) => {
    
    const { url } = req

    switch(url) {
        case DEFAULT_ENDPOINT:
            defaultController.getDefaultPage(req,res)
            break;

    }
}

module.exports = {
    handleDefaultRouter
}