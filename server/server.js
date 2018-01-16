const path = require('path')
const express = require('express')
const socketIO = require('socket.io')
const http = require('http')

const public_path = path.join(__dirname, '../public')
const port = process.env.PORT || 3000

var app = express()
var server = http.createServer(app)
var io = socketIO(server)

/* Listen event from client */
io.on('connection', (socket) => {
  console.log(`New user: ${socket}`)

  socket.on('disconnect', () => {
    console.log('User disconnect.')
  })
})

app.use(express.static(public_path))

server.listen(port, () => {
  console.log(`Server is up on ${port}`)
})
