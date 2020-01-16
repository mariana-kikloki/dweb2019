const Obra = require("../models/obrasModel");
module.exports.list = () => {
  return Obra.find({}, { _id: 0, instrumentos: 0 });
};
module.exports.getById = id => {
  return Obra.find({ id: id });
};
module.exports.getTipos = () => {
  return Obra.distinct("tipo").exec();
};
module.exports.listCompositor = compositor => {
  return Obra.find({ compositor: compositor });
};
module.exports.getObrasInstrumento = i => {
  return Obra.aggregate([
    {
      $unwind: "$instrumento"
    },
    {
      $match: { designacao: i }
    },
    { $project: { titulo: 1 } }
  ]).exec();
};
