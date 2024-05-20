const getCategoryPage = (req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(`<h1>Category Page </h1>`)
}

const getCategoryDetailPage = (req,res,id) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(`<h1>Category Detail Page, ID ${id}</h1>`)
}

module.exports = {
    getCategoryPage,
    getCategoryDetailPage
}