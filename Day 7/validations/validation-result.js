class ValidationResult{
    constructor(success,message='') {
        this.success = success
        this.message = message
    }
}

module.exports = ValidationResult