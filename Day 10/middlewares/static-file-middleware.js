const path = require('path')
const fs = require('fs')
const getRootPath = require('../utils/root-path')
const {CONTENT_TYPES} = require('../utils/constants')

function useAllStaticFiles(req,res,next) {
    const filePath = path.join(getRootPath(), 'public', req.url)
    fs.readFile(filePath, (err, content) => {
    if (err) {
        next()
    }
    else {
        const extname = path.extname(filePath)
        res.writeHead(200, { 'Content-Type': CONTENT_TYPES[extname] || 'application/octet-stream' });
        res.end(content)
    }
    })
}

module.exports = useAllStaticFiles;