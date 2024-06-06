const { LOGGING_TYPES } = require('../constants/constants')
const DatabaseLogger = require('./database-log')
const DiscordLogger = require('./discord-log')
const TelegramLogger = require('./telegram-log')

class Logger{
    constructor(logType) {
        this.logType = logType
    }

    async log(logModel){
        switch(this.logType) {
            case LOGGING_TYPES.INFO:
                const dbLogger = new DatabaseLogger(logModel)
                await dbLogger.log()
                break;
            case LOGGING_TYPES.ERROR:
                const tgLogger = new TelegramLogger();
                await tgLogger.log(logModel)
                break
            case LOGGING_TYPES.WARNING:
                const dcLogger = new DiscordLogger();
                await dcLogger.log(logModel)
                break
        }
    }
}

module.exports = Logger