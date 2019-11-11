var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  Filmes.listar()
    .then(dados => res.jsonp(dados))
    .catch(err => res.status(500).jsonp(err));
});
router.get("/:idFilme", function(req, res, next) {
  Filmes.consultar(req.params.idFilme)
    .then(dados => res.jsonp(dados))
    .catch(err => res.status(500).jsonp(err));
});

module.exports = router;
