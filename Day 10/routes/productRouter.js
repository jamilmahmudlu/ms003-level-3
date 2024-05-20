const { PRODUCT_ENDPOINT } = require('../utils/urlHelper')
const productController = require('../controllers/productController')

const Router = require('./router')

const router = new Router()
router.addRoute(PRODUCT_ENDPOINT,productController.getProductPage)


module.exports = router.handleRoute.bind(router)  // homeRouter