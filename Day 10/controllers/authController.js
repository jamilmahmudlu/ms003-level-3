const { register } = require('module')
const loadEjs = require('../utils/load-ejs')

const getLogin = (req,res) => {
    loadEjs('login',req,res)
}

const verifyUser =(req,res) => {
    // verify user in this method
}

const getRegister = (req,res) => {
    loadEjs('register', req,res)
}

module.exports = {
    getLogin,
    verifyUser,
    getRegister
}