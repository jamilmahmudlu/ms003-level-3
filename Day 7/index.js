const http = require("http");
const router = require("./routes/router");
const useCors = require('./middlewares/cors-middleware')

const PORT = 4444;


const server = http.createServer((req,res) => {
    useCors(req,res,()=> {
        router.handleRoutes(req,res)
    })
})


server.listen(PORT, ()=> {
    console.log(`Server listen port: ${PORT}`)
})