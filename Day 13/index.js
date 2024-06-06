const winston = require('winston');
const { DailyRotateFile } = require('winston-daily-rotate-file')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({
            level: 'error',
            format: winston.format.json(),
            filename: 'allErrors.json',
            maxFiles: '30d'
        }),
        new winston.transports.DailyRotateFile({
            filename:'warnings-%DATE%.log',
            datePattern: 'DD.MM.YYYY',
            format: winston.format.simple(),
            maxFiles: '15d',
            level: 'warn'
        })
    ],
    exceptionHandlers:[
        new winston.transports.File({
            filename: 'allExceptions.log',
            format: winston.format.simple(),
            maxFiles: '20d'
        })
    ],
    rejectionHandlers:[
        new winston.transports.File({
            filename:'allRejections.log',
            format:winston.format.simple(),
            maxFiles: '20d'
        })
    ]

})

// logger.info('Hello team')

// logger.error({
//     team: 'Codelandia MS-003',
//     members: 'all'
// })

// function test() {
//     throw new Error('My own error log')
// }

// test()

function test() {
    return new Promise((resolve,reject)=> {
        reject('My own error message')
    })
}

test()