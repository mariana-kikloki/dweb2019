const http = require('http');

const servidor = http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write(req);
    res.end();
})

servidor.listen(7777);