const countryActions = require("./controllers/countryController");

const routes = {
    "/": {
        "GET": ()=>{}
    },
    "/countries": {
        "GET": countryActions.getAllCountries
    }
}

module.exports = routes