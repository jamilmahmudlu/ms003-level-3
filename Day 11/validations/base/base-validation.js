const ValidationError = require("./validation-error");
const ValidationResult = require("./validation-result");

class BaseValidation {
    /**
     * @type {Function[]}
     */
    constructor() {
        this.validations = [];
    }

    /**
     * 
     * @param {Function} validator 
     */
    addValidation(validator) {
        this.validations.push(validator)
    }

    validate() {
        let errors = []

        for (const validator of this.validations) {
            const result = validator()  // Validator() --> her hansi bir validation method
            if(result !== null ) {
                errors.push(result)
            }
        }

        return new ValidationResult(errors.length === 0, errors)

    }

    checkNotNull(field, message = null, code = null) {
        return field === '' ? new ValidationError(message, code) : null
    }

    checkLength(field, min, max, message = null,code = null) {
        return(field.length < min || field.length > max)
        ? new ValidationError(message, code)
        : null
    }

    checkCustomValidation(callback, field, message = null, code = null){
        return !callback(field) 
        ? new ValidationError(message,code) : null
    }

    // Validationlar uchun korpu
}

module.exports = BaseValidation;