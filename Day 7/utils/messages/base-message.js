const generateNotNullMessage = fieldname => {
    return `${fieldname} must be required`
}

const generateMinAndMaxLengthMessage = (fieldname,min,max) => {
    return `${fieldname} must between ${min} and ${max}`
}

const DATA_ADDED_SUCCESSFULLY = `Data add`


module.exports = {
    generateNotNullMessage,
    generateMinAndMaxLengthMessage,
    DATA_ADDED_SUCCESSFULLY
}