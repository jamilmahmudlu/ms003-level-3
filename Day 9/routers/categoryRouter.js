const { CATEGORY_ENDPOINT } = require('../utils/urlHelper')
const categoryController = require('../controllers/categoryController')

const handleCategoryRouter = (req, res) => {
    
    const { url } = req

    switch(url) {
        case CATEGORY_ENDPOINT:
            categoryController.getCategoryPage(req,res)
            break;

    }
}

module.exports = {
    handleCategoryRouter
}