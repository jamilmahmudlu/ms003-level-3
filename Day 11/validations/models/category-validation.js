const Category = require('../../models/category')
const BaseValidation = require('../base/base-validation')

class CategoryValidation extends BaseValidation{
    /**
     * 
     * @param {Category} category 
     */

    constructor(category) {
        super();
        this.addValidation(() => this.checkNotNull(category.name, 'Category name must not be null', 10001))  // () - validator()
        this.addValidation(()=> this.checkLength(category.name,3,10,'Name must be 3-5 interval', 10002))
        this.addValidation(()=>this.checkCustomValidation(this.checkContainsXY,category.name,'XY must not be included', 10003))
    }
    checkContainsXY(field) {
        return !field.includes('xy');
    }
}

module.exports = CategoryValidation;