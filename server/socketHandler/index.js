
var fs = require('fs');

const listeners = []

fs.readdirSync(__dirname).forEach(function(file) {
    if (file == "index.js") return;
    var name = file.substr(0, file.indexOf('.'));
    listeners.push(require('./'+name))
})

module.exports =  listeners