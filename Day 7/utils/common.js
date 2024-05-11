const validationResultHelper = (...validationResults) => {
    for(const result of validationResults) {
        if(!result.success) {
            return result;
        }
    }

    return null;
}

module.exports = {
    validationResultHelper
}