var express = require("express");
const axios = require("axios");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  axios
    .get(
      "http://clav-api.dglab.gov.pt/api/entidades?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ"
    )
    .then(result => {
      //console.log(result);
      //res.jsonp(result.data);
      res.render("index", { lista: result.data });
    })
    .catch(err => {
      res.render("error");
    });
});
router.get("/:id", function(req, res, next) {
  let one = `http://clav-api.dglab.gov.pt/api/entidades/${req.params.id}?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ`;
  let two = `http://clav-api.dglab.gov.pt/api/entidades/${req.params.id}/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ`;
  let three = `http://clav-api.dglab.gov.pt/api/entidades/${req.params.id}/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ`;
  let four = `http://clav-api.dglab.gov.pt/api/entidades/${req.params.id}/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ`;

  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
  const requestThree = axios.get(three);
  const requestFour = axios.get(four);

  axios
    .all([requestOne, requestTwo, requestThree, requestFour])
    .then(
      axios.spread((...responses) => {
        const entidade = responses[0].data;
        const tipologias = responses[1].data;
        const dono = responses[2].data;
        const participante = responses[3].data;
        //console.log(participante);
        res.render("entidade", {
          entidade: entidade,
          tipologias: tipologias,
          dono: dono,
          participante: participante
        });
      })
    )
    .catch(errors => {
      res.render("erro");
    });
});
module.exports = router;
