const home_template = require('../pages/home')

const bindHomePage = (res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(home_template)
    res.end()
}

const homeActions = {
    bindHomePage
}

module.exports = homeActions