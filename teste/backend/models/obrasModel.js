const mongoose = require("mongoose");

const obraSchema = new mongoose.Schema({
  id: String,
  titulo: String,
  tipo: String,
  compositor: String,
  instrumento: Array,
  _id: String
});

module.exports = mongoose.model("obra", obraSchema);
