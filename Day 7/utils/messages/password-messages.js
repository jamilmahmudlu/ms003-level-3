const PASSWORD_CONFIG = require('../password-config')

const PASSWORD_MIN_LENGTH = `Password must greater than ${PASSWORD_CONFIG.minLength}`
const PASSWORD_UPPERCASE = `Password must contain uppercase`
const PASSWORD_LOWERCASE = `Password must contain lowercase`
const PASSWORD_DIGIT = `Password must contain digit`
const PASSWORD_SPECIAL_CHAR = `Password must contain special character`
const PASSWORD_SPACE = `Password must not contain space`

module.exports = {
    PASSWORD_MIN_LENGTH,
    PASSWORD_UPPERCASE,
    PASSWORD_LOWERCASE,
    PASSWORD_DIGIT,
    PASSWORD_SPECIAL_CHAR,
    PASSWORD_SPACE
}