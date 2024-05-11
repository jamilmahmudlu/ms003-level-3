const {USER_GET_ALL, USER_CREATE, USER_VERIFY} = require('../utils/urlhelper')

const userController = require('../controllers/user-controller')

const handleUserRoutes = (req, res) => {
    const {url} = req

    switch(url) {
        case USER_CREATE:
            userController.addUser(req,res);
            break;
        case USER_GET_ALL:
            userController.getAllUsers(req,res);
            break;
        case USER_VERIFY:
            userController.verifyUserController(req,res);
            break;
    }
}

module.exports = {
    handleUserRoutes
}