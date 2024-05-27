const Category = require('./models/category')
const CategoryValidation = require('./validations/models/category-validation')

const validator = new CategoryValidation(new Category('xy','Teysadsgj'))
const result = validator.validate()

console.log(result)
// if(!result.isValid)
//     console.log(result.toString())