let http = require('http')
let _ = require('underscore')

let server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.end('Hello world!')
})

server.listen(3000, (...args) => {
    console.log('Server running!')
})