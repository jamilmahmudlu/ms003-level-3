const http = require('http');
const ROUTES = require('./routes/routes')
const PORT = 4222;
const useAllStaticFiles = require('./middlewares/static-file-middleware')

const server = http.createServer((req, res) => {
    useAllStaticFiles(req,res,()=> {
        handleDynamicRoutes(req,res);
    })
})

const handleDynamicRoutes = (req,res) => {
    let found = false;
    for (const handler of ROUTES) {
        if(handler(req,res)) {
            found = true
            break
        }
    }
    
    if(!found){
        showErrorPage(req,res)
    }


}

const showErrorPage = (req,res) =>{
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.end('Not found')
}

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})