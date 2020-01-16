var express = require("express");
var router = express.Router();
const Obra = require("../controllers/obraController");

/* GET home page. */
router.get("/obras", async function(req, res, next) {
  try {
    let compositor = req.query.compositor;
    let instrumento = req.query.instrumento;
    let obras;
    if (compositor) {
      obras = await Obra.listCompositor();
    } else if (instrumento) {
      obras = await Obra.getObrasInstrumento(instrumento);
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
router.get("/tipos", async (req, res, next) => {
  try {
    const t = await Obra.getTipos();
    res.jsonp(t);
  } catch (error) {
    console.log(error);
    res.status(500).jsonp(error);
  }
});
module.exports = router;
