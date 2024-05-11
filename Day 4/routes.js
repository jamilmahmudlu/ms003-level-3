const bindAboutPage = require("./controllers/aboutController")
const homeActions = require("./controllers/homeController")

const routes = {
    "/": {
        "GET": homeActions.bindHomePage
    },
    "/about": {
        "GET": bindAboutPage
    }
}

module.exports = routes