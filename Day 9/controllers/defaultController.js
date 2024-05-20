const fs = require('fs')
const path = require('path')
const getRootPath = require('../utils/root-path')
const ejs = require('ejs')
const categoryService = require('../services/category-service')

const getDefaultPage = async (req,res) => {
    const categories =  await categoryService.getAllCategories()
    // const htmlFilePath = path.join(getRootPath(), 'views','pages','default.ejs')
    const ejsFilePath = path.join(getRootPath(), 'views','pages','default.ejs')
    fs.readFile(ejsFilePath, 'utf-8', (err,data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'})
            res.end('Internal server error')
        }
        const datas = {
            rootPath: getRootPath(),
            myRandomText: 'Some description',
            categories: categories
        }


        const renderedHTML = ejs.render(data,datas)
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.end(renderedHTML)
    })
}

module.exports = {getDefaultPage}