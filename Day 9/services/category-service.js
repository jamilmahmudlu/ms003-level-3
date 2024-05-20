const baseService = require('./base-service')

async function getAllCategories() {
    const result = await baseService.getAllJSONData()
    return result.categories;
}

module.exports = {
    getAllCategories
}