const { PRODUCT_ENDPOINT } = require('../utils/urlHelper')
const productController = require('../controllers/productController')

const handleProductRouter = (req, res) => {
    
    const { url } = req

    switch(url) {
        case PRODUCT_ENDPOINT:
            productController.getProductPage(req,res)
            break;

    }
}

module.exports = {
    handleProductRouter
}