var express = require("express");
var router = express.Router();
var jsonfile = require("jsonfile");
var uniqid = require("uniqid");

var myBD = __dirname + "/../arqson.json";
/* GET home page. */
/* GET home page. */
router.get("/", function(req, res, next) {
  jsonfile.readFile(myBD, (erro, musicas) => {
    if (!erro) {
      res.render("index", { arq: musicas });
    } else {
      res.render("error", { error: erro });
    }
  });
});
router.post("/new", (req, res, next) => {
  jsonfile.readFile(myBD, (error, arq) => {
    if (!error) {
      req.body.id = uniqid();
      let newArq = req.body;
      arq.push(newArq);
      jsonfile.writeFile(myBD, arq, error => {
        if (error) {
          res.render("error", error);
        } else {
          res.redirect("/");
        }
      });
    }
  });
});

router.put("/arq/update/:id", (req, res, next) => {
  req.body.id = req.params.id;
  jsonfile.readFile(myBD, (error, arqs) => {
    if (!error) {
      let index = arqs.findIndex(x => x.id === req.body.id);
      arqs[index] = req.body;
      jsonfile.writeFile(myBD, arqs, error => {
        if (!error) {
          res.sendStatus(200);
        } else {
          res.sendStatus(400).render("error", error);
        }
      });
    } else {
      res.sendStatus(400).render("error", error);
    }
  });
});
router.get("/arq/:id", (req, res, next) => {
  jsonfile.readFile(myBD, (error, arqs) => {
    if (!error) {
      let arq = arqs.find(obj => obj.id === req.params.id);
      res.render("music", { arq });
    }
  });
});
router.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  jsonfile.readFile(myBD, (error, arqs) => {
    if (!error) {
      let index = arqs.findIndex(x => x.id === id);
      arqs.splice(index, 1);
    } else {
      res.render("error", error);
    }

    jsonfile.writeFile(myBD, arqs, error => {
      if (error) {
        res.sendStatus(400).render("error", error);
      } else {
        res.sendStatus(200);
      }
    });
  });
});
module.exports = router;
