const axios = require('axios')

class DiscordLogger{
    constructor(){

    }

    async log(logModel) {
        const message = {
            content: JSON.stringify(logModel)
        }

        axios.post('https://discord.com/api/webhooks/1245793429410025573/W6OIzoLFzLzXyBSIkZ79QPuyYYqahJgtOKfrBnqInB97FbBh7GqwFpUJbo1Vw8i4tzhs', x)
        .then(response=> {
        })
        .catch(error => {
        })
    }
}

module.exports = DiscordLogger