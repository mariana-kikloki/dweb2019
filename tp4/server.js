var http = require("http");
var fs = require("fs");
var port = 7777;

function handler(res, pathFile, contentType) {
    fs.readFile(pathFile, function (err, data) {
        if (err) {
            console.log(pathFile + ":\n" + err);
            res.writeHead(404);
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.write(data);
        res.end();
    });
}

var server = http.createServer(function (req, res) {
    var parts = req.url.split("/");
    
    var file = parts[parts.length - 1];

    if(!isNaN(file)){
        fs.readFile("dataset/arq" + file + ".xml", function (err, data) {
            if (err) {
                res.writeHead(404);
                res.write("O ficheiro arq"+file+".xml não foi encontrado");
                res.end();
            }else{
            /* Se o ficheiro existir, devolver o conteúdo da página arq{file}.xml */
            res.writeHead(200, { 'Content-Type': 'text/xml; charset=utf-8' });
            res.write(data);
            res.end();
        }
        });
    }
    else if(file.endsWith('.xsl')){
        handler(res, file, "text/xsl; charset=utf-8")
    }
    else {
        // se a query string não for um número nem o xsl
        res.writeHead(404);
        res.write("O ficheiro "+file+" não foi encontrado");
        res.end();      
    }
})

server.listen(port);
console.log("Servidor à escuta na porta " + port);