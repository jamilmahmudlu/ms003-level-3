const PASSWORD_CONFIG = require('../utils/password-config')
const { PASSWORD_MIN_LENGTH, PASSWORD_UPPERCASE, PASSWORD_LOWERCASE, PASSWORD_DIGIT, PASSWORD_SPECIAL_CHAR, PASSWORD_SPACE } = require('../utils/messages/password-messages')
const ValidationResult = require('./validation-result')
const { validationResultHelper } = require('../utils/common')
const { ErrorResult, SuccessResult } = require('../utils/results/result')

const validatePassword = password => {
    const result = validationResultHelper(
        checkMinLength(password),
        checkOneLowerCase(password),
        checkOneUpperCase(password),
        checkOneDigit(password),
        checkOneSpecialChar(password),
        checkContainSpace(password)
    )

    if (result !== null) return new ErrorResult(result.message)

    return new SuccessResult();
}



const checkMinLength = (password) => {
    if(password.length < PASSWORD_CONFIG.minLength) {
        return new ValidationResult(false, PASSWORD_MIN_LENGTH)
    }
    return new ValidationResult(true)
}

const checkOneLowerCase = (password) => {
    if(PASSWORD_CONFIG.isContainLowerCase && !password.match(/[a-z]/)) {
        return new ValidationResult(false, PASSWORD_LOWERCASE)
    }
    return new ValidationResult(true)
}

const checkOneUpperCase = (password) => {
    if(PASSWORD_CONFIG.isContainUpperCase && !password.match(/[A-Z]/)) {
        return new ValidationResult(false, PASSWORD_UPPERCASE)
    }
    return new ValidationResult(true)
}

const checkOneDigit = (password) => {
    if(PASSWORD_CONFIG.isContainDigit && !password.match(/[0-9]/)) {
        return new ValidationResult(false, PASSWORD_DIGIT)
    }
    return new ValidationResult(true)
}

const checkOneSpecialChar = (password) => {
    if(PASSWORD_CONFIG.isContainSpecialChar && !password.match(/[$&:;?@#|()%]/)) {
        return new ValidationResult(false, PASSWORD_SPECIAL_CHAR)
    }
    return new ValidationResult(true)
}

const checkContainSpace = (password) => {
    if(PASSWORD_CONFIG.isContainSpace && password.match(/\s/)) {
        return new ValidationResult(false, PASSWORD_SPACE)
    }
    return new ValidationResult(true)
}

module.exports = validatePassword;