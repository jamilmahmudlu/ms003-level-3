const path = require('path')

const getRootPath = () => {
    return path.dirname(require.main.filename)
}

module.exports = getRootPath;