const { CATEGORY_ENDPOINT, CATEGORY_DETAIL } = require('../utils/urlHelper')
const categoryController = require('../controllers/categoryController')

const Router = require('./router')

const router = new Router()
router.addRoute(CATEGORY_ENDPOINT,categoryController.getCategoryPage)
router.addRoute(CATEGORY_DETAIL, categoryController.getCategoryDetailPage, true)
// router = ajkkhajshkja

module.exports = router.handleRoute.bind(router)