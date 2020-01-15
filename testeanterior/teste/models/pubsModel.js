const mongoose = require("mongoose");

const pubsSchema = new mongoose.Schema({
  type: String,
  id: String,
  authors: Array,
  title: String,
  booktitle: String,
  address: String,
  year: String,
  month: String,
  doi: String,
  _id: String
});

module.exports = mongoose.model("publicacoes", pubsSchema);
