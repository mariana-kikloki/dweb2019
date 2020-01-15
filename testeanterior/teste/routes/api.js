var express = require("express");
var router = express.Router();
const Pub = require("../controllers/pubController");
/* GET users listing. */
router.get("/pubs", async function(req, res, next) {
  try {
    let year = req.query.year;
    let type = req.query.type;
    let autor = req.query.autor;
    let pubs;
    if (type && year) {
      pubs = await Pub.listTypeYear(type, year);
    } else if (type) {
      pubs = await Pub.listType(type);
    } else if (autor) {
      //console.log(autor);
      pubs = await Pub.getAuthorPubs(autor);
    } else {
      pubs = await Pub.list();
      //console.log("hello");
    }
    res.jsonp(pubs);
  } catch (error) {
    console.log(error);
    res.status(500).jsonp(error);
  }
});

router.get("/pubs/:id", async (req, res, next) => {
  try {
    const pub = await Pub.getById(req.params.id);
    res.jsonp(pub);
  } catch (error) {
    console.log(error);
    res.status(500).jsonp(error);
  }
});
router.get("/types", async (req, res, next) => {
  try {
    const types = await Pub.getTypes();
    res.jsonp(types);
  } catch (error) {
    console.log(error);
    res.status(500).jsonp(error);
  }
});
router.get("/autores", async (req, res, next) => {
  try {
    const aut = await Pub.getAuthors();
    res.jsonp(aut);
  } catch (error) {
    console.log(error);
    res.status(500).jsonp(error);
  }
});

module.exports = router;
