const express = require('express');
const socketIO = require('socket.io');
const ChatManager = require('./ChatManager');
const app = express()
const port = 3003
const server = require('http').createServer(app);
const socketsListeners = require('./socketHandler')

require('./api')(app)

server.listen(port);
global.io = socketIO(server, {allowEIO3:true,cors: {
    cors:true,
    origins: ['*'],
}});
global.chatManager = new ChatManager()
console.log(`Сервер работает на порте: ${port}`)
global.io.sockets.on("connection", socket => {
    console.log("new connection ", socket.id)
    
    socket.on("disconnect", ()=>{
        console.log("disconnected ", socket.id)
    })

    socketsListeners.forEach(listener => {
        listener(socket)
    })

    global.chatManager.sendHistory(socket)
})
setInterval(() => {
    for (const [_, socket] of global.io.of("/").sockets) {
        socket.emit("ping")
    }
}, 5000)