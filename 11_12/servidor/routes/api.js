var express = require("express");
var router = express.Router();
const Obra = require("../controllers/obraController");

router.get("/obras", async function(req, res, next) {
  try {
    let compositor = req.query.compositor;
    let duracao = req.query.duracao;
    let ano = req.query.ano;
    let periodo = req.query.periodo;
    let obras;
    if (compositor && duracao) {
      obras = await Obra.listCompositorDuracao(compositor, duracao);
    } else if (ano) {
      obras = await Obra.listAno(ano);
    } else if (periodo) {
      obras = await Obra.listPeriodo(periodo);
    } else {
      obras = await Obra.list();
    }
    res.jsonp(obras);
  } catch (error) {
    console.log(error);
    res.status(500).jsonp(error);
  }
});

router.get("/obras/:id", async (req, res, next) => {
  try {
    const obra = await Obra.getById(req.params.id);
    res.jsonp(obra);
  } catch (error) {
    console.log(error);
    res.status(500).jsonp(error);
  }
});
router.get("/compositores", async (req, res, next) => {
  try {
    const compositores = await Obra.getCompositores();
    res.jsonp(compositores);
  } catch (error) {
    console.log(error);
    res.status(500).jsonp(error);
  }
});
router.get("/periodos", async (req, res, next) => {
  try {
    const periodos = await Obra.getPeriodos();
    res.jsonp(periodos);
  } catch (error) {
    console.log(error);
    res.status(500).jsonp(error);
  }
});

module.exports = router;
