const axios = require('axios')

class TelegramLogger{
    constructor(){

    }

    async log(logModel) {

        // console.log('Telegram logging action..')
        // console.log(logModel)
        const token = '7485820094:AAEa0u0MQT6gkEyyNKdHXYlaSQkbRlv1diI'
        const chatId = 917713531

        const message = JSON.stringify(logModel)
        const url = `https://api.telegram.org/bot${token}/sendMessage`
        axios.post(url, {
            chat_id: chatId,
            text: message,
            parse_mode:'Markdown'
        })
            .then(response=> {
                if(response.status !== 200) {
                    console.error('Error to send Telegram', response.data)
                }
            })
            .catch(error => {
                console.error('Error sending to Telegram', error)
            })
    }
}

module.exports = TelegramLogger