const baseService = require('./base-service')
const { JSON_MODEL_KEYS } = require('../utils/enums')
const { userValidate } = require('../validations/user-validation')
const result = require('../utils/results/result')
const validatePassword = require('../validations/password-validation')
const { DATA_ADDED_SUCCESSFULLY } = require('../utils/messages/base-message')
const bcrypt = require('bcrypt')
const { USER_USERNAME_DOESNT_EXIST, USER_PASSWORD_INCORRECT, USER_IS_BLOCK, USER_LOGIN_COMPLETE } = require('../utils/messages/user-messages')

async function getAllUsers() {
    return await baseService.getData(JSON_MODEL_KEYS.USERS)

}

async function addUser(model) {

    //validate user model
    const validationResult = userValidate(model)
    if(!validationResult.success) return validationResult;
    
    // validate password
    const passwordValidationResult = validatePassword(model.password)
    if(!passwordValidationResult.success) return passwordValidationResult;

    // hash password

    const saltRounds = 10;
    const saltKey = await bcrypt.genSalt(saltRounds)
    model.password = await bcrypt.hash(model.password,saltKey)


    // abc1234! --  10denelikod  --  hashlanmishhali
    const data = await baseService.insertData(JSON_MODEL_KEYS.USERS, model)
    return new result.SuccessResult(DATA_ADDED_SUCCESSFULLY, data)
}

async function verifyUser(user) {
    const myAllUsers = await baseService.getData(JSON_MODEL_KEYS.USERS)
    const existingUser = myAllUsers.find(x=>x.username === user.username) 
    if (existingUser === undefined)
        return new result.ErrorResult(USER_USERNAME_DOESNT_EXIST)

    const passwordVerifyResult = await bcrypt.compare(user.password,existingUser.password)

    if(!passwordVerifyResult) 
        return new  result.ErrorResult(USER_PASSWORD_INCORRECT)

    if(!existingUser.isActive) 
        return new result.ErrorResult(USER_IS_BLOCK)


    return new result.SuccessResult(USER_LOGIN_COMPLETE)
}

module.exports = {
    getAllUsers,
    addUser,
    verifyUser
}