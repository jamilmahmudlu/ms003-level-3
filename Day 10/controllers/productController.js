const getProductPage = (req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(`<h1>Product Page </h1>`)
}

module.exports = {
    getProductPage
}