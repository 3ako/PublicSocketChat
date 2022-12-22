module.exports = function(app){
    app.get('/getChatHistory',(req,res)=>{
        res.set({ 'content-type': 'json; charset=utf-8' });
        res.end(JSON.stringify(global.chatManager.history))
    })
}