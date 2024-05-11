const http = require('http')
// const path = require('path')
// __dirname 
const fs = require('fs')

const server = http.createServer((req,res)=>{
    fs.readFile("db.json",'utf-8',(err,data) => {
        if(err) {
            console.log(err)
        }

        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(data)
    })
    // let countries;
    // fetch('db.json').then(res=>res.json()).then(data=>{
    //     countries = data;
    // })

})

server.listen(3000,()=> {
    console.log('My server listening 3000 port')
});
