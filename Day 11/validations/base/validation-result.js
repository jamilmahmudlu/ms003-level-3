const ValidationError = require("./validation-error")

class ValidationResult {

    /**
     * 
     * @param {Boolean} isValid  // true - null 
     * @param {ValidationError[]|null} errors 
     */
    constructor(isValid, errors = []){
        this.isValid = isValid
        this.errors = errors
    }

    toString() {
        return this.errors.map(x=> x.error).join('\n')
    }
}

module.exports = ValidationResult;