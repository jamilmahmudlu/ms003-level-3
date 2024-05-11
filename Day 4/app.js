const http = require('http');
const routes = require('./routes')
const handler_404 = require('./pages/404')

const server = http.createServer((req,res) => {
    const route = routes[req.url]
    console.log(route)
    if(route == undefined) {
        handler_404(req,res)
    }
    const handler = route[req.method]
    handler(res)
})

server.listen(3000, ()=> {
    console.log('Server is running on port 3000')
})