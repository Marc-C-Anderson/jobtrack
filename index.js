'use strict'

const http = require('node:http')

const server = http.createServer((req, res) => {
    res.end("Hello.")
})

// http.on('listen', event => { console.log(event) })
//server.on('connection', event => { console.log(event) })

server.listen(8000)
