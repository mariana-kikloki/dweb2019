var http = require('http');
var meta = require('./my-mod');

var servidor = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Olá');
})

servidor.listen(7777);