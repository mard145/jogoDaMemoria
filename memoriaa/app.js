const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const socketIO = require('socket.io')

const IO = socketIO.listen(server)

server.listen(3000, ()=>{

console.log('rodando')

})

app.use(express.static(__dirname + "/public"))

IO.on('connection', (socket) => {

    console.log('Nova conexão')

    socket.on('Mensagem', ()=> {

        console.log('Mensagem recebida')
})



})