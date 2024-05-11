const http = require("http");
const router = require("./routes/router");

const PORT = 3000;


const server = http.createServer((req,res) => {
    router.handleRoutes(req,res)
})


server.listen(PORT, ()=> {
    console.log(`Server listen port: ${PORT}`)
})