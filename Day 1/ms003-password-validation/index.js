const PASSWORD_NOT_MATCH = 'Passwords dont match'
const PASSWORD_MIN_LENGTH = 'Password length must be at least 8 character'
const VALIDATION_SUCCESSFUL = 'Validation successful'


function validatePassword(password, newPassword) {
    // matching
    if(password != newPassword) {
        return responseResult(false, PASSWORD_NOT_MATCH)
    }
    if(password.length < 8 ) {
        return responseResult(false, PASSWORD_MIN_LENGTH)
    }

    return responseResult(true, VALIDATION_SUCCESSFUL)
}

function responseResult(success, our_message) {
    return {
        success: success,
        our_message: our_message
    }
}

module.exports = validatePassword;

