const { HTTP_METHODS } = require("../helpers/enums")
const aboutController = require("../controllers/about-controller")

const handleAboutRoutes = (req,res) => {
    const {method} = req;

    switch(method) {
        case HTTP_METHODS.GET:
            aboutController.getAboutInfo(req,res);
            break;
        case HTTP_METHODS.POST:
            aboutController.createAbout(req,res)
            break;
    }
}

module.exports = {
    handleAboutRoutes
}