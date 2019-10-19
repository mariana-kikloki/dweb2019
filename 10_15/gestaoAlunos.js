var http = require("http");
var url = require("url");
var pug = require("pug");
var fs = require("fs");
var jsonfile = require("jsonfile");

var { parse } = require("querystring");

var myBD = "alunos.json";

var myServer = http.createServer((req, res) => {
  var purl = url.parse(req.url, true);
  var query = purl.query;
  console.log(req.method + "  " + purl.pathname);
  if (req.method == "GET") {
    if (purl.pathname == "/" || purl.pathname == "/gestaoAlunos") {
      res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
      });
      res.write(pug.renderFile("index.pug"));
      res.end();
    } else if (purl.pathname == "/w3.css") {
      res.writeHead(200, {
        "Content-Type": "text/css;charset=utf-8"
      });
      fs.readFile("stylesheets/w3.css");
    }
  } else if (req.method == "POST") {
  } else {
    res.writeHead(200, {
      "Content-Type": "text/html;charset=utf-8"
    });
    res.write(
      pug.renderFile("erro.pug", {
        e: "Erro " + req.method + " nao suportado"
      })
    );
    res.end();
  }
});

myServer.listen(5005);
