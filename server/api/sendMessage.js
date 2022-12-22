module.exports = function(app){
    app.all('/sendMessage',(req,res)=>{
        res.set({ 'content-type': 'json; charset=utf-8' });
        const get = req.query;
        if (!get.username || !get.text) {
            res.end(JSON.stringify({error: true, message: "invalid data"}))
            return
        }

        global.chatManager.sendMessage(get.username, get.text)
        res.end("ok")
    })
}