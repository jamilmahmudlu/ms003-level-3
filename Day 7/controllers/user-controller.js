const User = require('../models/user')
const _userService = require('../services/user-service')
const parseRequestBody = require('../utils/parser')
const generateResponse = require('../utils/responseGenerator')


async function getAllUsers(req,res) {
    const data = await _userService.getAllUsers()
    generateResponse(res,200,data)
}

async function addUser(req, res) {
    const body = await parseRequestBody(req)
    const user = new User(body.email, body.fullname, body.username, body.password, body.isActive)
    const result = await _userService.addUser(user)
    generateResponse(res, 201,result)
}

async function verifyUserController(req,res) {
    const body = await parseRequestBody(req)
    const result = await _userService.verifyUser(body)
    generateResponse(res,200,result)
}

module.exports = {
    getAllUsers,
    addUser,
    verifyUserController
}