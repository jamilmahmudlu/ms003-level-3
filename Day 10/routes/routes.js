const defaultHandler = require('./defaultRouter')
const categoryHandler = require('./categoryRouter')
const productHandler = require('./productRouter')
const authHandler = require('./authRouter')

module.exports = [
    defaultHandler,
    categoryHandler,
    productHandler,
    authHandler
]