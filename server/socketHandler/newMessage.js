module.exports = (socket) => {
    socket.on('newMessage', data => {
        if (!data.username || !data.text) return;

        global.chatManager.sendMessage(data.username, data.text)
})}