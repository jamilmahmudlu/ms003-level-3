const template_content_404 = '<h1>404 Page Not Found</h1>'
const handler_404 = (req,res) => {
    res.writeHead(404, {'Content-Type': 'text/html'})
    res.write(template_content_404)
    res.end()
}


module.exports = handler_404