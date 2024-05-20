const {LOGIN_ENDPOINT, LOGIN_VERIFY, REGISTER_ENDPOINT} = require('../utils/urlHelper')
const authController = require('../controllers/authController')
const Router = require('./router')

const router = new Router()
router.addRoute(LOGIN_ENDPOINT,authController.getLogin)
router.addRoute(REGISTER_ENDPOINT,authController.getRegister)
router.addRoute(LOGIN_VERIFY,authController.verifyUser)


module.exports = router.handleRoute.bind(router)
