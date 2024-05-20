const path = require('path')
const fs = require('fs')
const getRootPath = require('../utils/root-path')

function useAllStaticFiles(req,res,next) {
    const filePath = path.join(getRootPath(), 'public', req.url)
    fs.readFile(filePath, (err, content) => {
    if (err) {
        next()
    }
    else {
        const extname = path.extname(filePath)
        const contentType = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'text/javascript',
            '.png': 'image/png',
            '.jpg': 'image/jpg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
        };
        res.writeHead(200, { 'Content-Type': contentType[extname] || 'application/octet-stream' });
        res.end(content)
    }
    })
}

module.exports = useAllStaticFiles;