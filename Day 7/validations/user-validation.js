const { generateNotNullMessage, generateMinAndMaxLengthMessage } = require("../utils/messages/base-message")
const ValidationResult = require("./validation-result")
const result = require('../utils/results/result')
const { validationResultHelper } = require('../utils/common')

const userValidate = (user) => {
    const validationResult = validationResultHelper(
        checkUserNameNotNull(user),
        checkUserMinAndMax(user),
        checkFullnameNotNull(user),
        checkFullnameMinAndMax(user)
    )

    if(validationResult == null) return new result.SuccessResult()

    return new result.ErrorResult(validationResult.message)
}



const checkUserNameNotNull = (user) => {
    if(user.username === '') {
        return new ValidationResult(false,generateNotNullMessage('Username'))
    }
    return new ValidationResult(true)
}

const checkUserMinAndMax = (user) => {
    if(user.username.length < 5 || user.username.length > 20) {
        return new ValidationResult(false, generateMinAndMaxLengthMessage('Username', 5, 20))
    } 

    return new ValidationResult(true)
}

const checkFullnameNotNull = (user) => {
    if(user.fullname === '') {
        return new ValidationResult(false,generateNotNullMessage('Fullname'))
    }
    return new ValidationResult(true)
}

const checkFullnameMinAndMax = (user) => {
    if(user.fullname.length < 5 || user.fullname.length > 20) {
        return new ValidationResult(false, generateMinAndMaxLengthMessage('Fullname', 5, 20))
    } 

    return new ValidationResult(true)
}

module.exports = {userValidate}