const getDefaultPage = (req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(`<h1>Default Page </h1>`)
}

module.exports = {
    getDefaultPage
}