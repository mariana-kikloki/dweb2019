var mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/filmesDAW", { useNewUrlParser: true })
  .then(() => {
    console.log("Mongo ready");
  })
  .catch(() => {
    console.log("erro");
  });

/*
mongoose.connect("mongodb://localhost/filmes", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("LigaÃ§Ã£o ao MongoDB feita com sucesso!");
*/
var filmeSchema = new mongoose.Schema({
  title: String,
  year: Number,
  cast: Array,
  genres: Array
});

var FilmeModel = mongoose.model("FilmeHandler", filmeSchema);

var jcrMovie = new FilmeModel({
  title: "Teste da aula de PRI2019",
  year: 2019,
  cast: ["jcr", "aluno1", "aluno2"],
  genres: ["Drama", "ComÃ©dia"]
});
console.log(jcrMovie.title);

jcrMovie.save(function(err, filme) {
  if (err) return console.error(err);
  else console.log(filme.title + " foi gravado com sucesso.");
});

FilmeHandler.find(function(err, filmes) {
  if (err) return console.error(err);
  else console.log(filmes);
});
