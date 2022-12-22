module.exports = class ChatManager {
    history = []

    sendMessage(author, text) {
        const message = {
            username: author,
            text: text
        }
        this.history.push(message)
        for (const [_, socket] of global.io.of("/").sockets) {
            socket.emit("newMessage", message)
        }
    }

    sendHistory(socket) {
        this.history.forEach(m => {
            socket.emit("newMessage", m)
        })
    } 
}