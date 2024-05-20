const { DEFAULT_ENDPOINT } = require('../utils/urlHelper')
const defaultController = require('../controllers/defaultController')

const Router = require('./router')

const router = new Router()
router.addRoute(DEFAULT_ENDPOINT,defaultController.getDefaultPage)

// home router is ready -- homeRouter

module.exports = router.handleRoute.bind(router)  // homeRouter