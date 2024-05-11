const about_template = require('../pages/about')

const bindAboutPage = (res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(about_template)
    res.end()
}

// const aboutActions = {
//     bindAboutPage
// }

module.exports = bindAboutPage;