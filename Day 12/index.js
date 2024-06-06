const http = require('http')
const dotenv = require('dotenv')
const Logger = require('./logging/logger')
const { LOGGING_TYPES } = require('./constants/constants')
const LogModel = require('./logging/log-model')

dotenv.config()

const PORT = process.env.PORT || 3232

const server = http.createServer((req,res) => {
    const logger = new Logger(LOGGING_TYPES.INFO);
    logger.log(new LogModel({
        url: req.url,
        method: req.method,
        status:req.statusCode
    }))
})

server.listen(PORT, ()=> {
    console.log(`Server listen ${PORT}`)
})