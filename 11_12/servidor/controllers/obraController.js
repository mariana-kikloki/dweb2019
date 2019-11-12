const Obra = require("../models/obrasModel");
module.exports.list = () => {
  return Obra.find({}, { _id: 0 });
};
module.exports.listAno = year => {
  return Obra.find({ anoCriacao: year });
};
module.exports.listPeriodo = periodo => {
  return Obra.find({ periodo: periodo });
};
module.exports.listCompositorDuracao = (compositor, duracao) => {
  return Obra.find({ compositor: compositor, duracao: { $gt: duracao } });
};
module.exports.getById = id => {
  return Obra.findById(id);
};
module.exports.getCompositores = () => {
  return Obra.distinct("compositor").exec();
};
module.exports.getPeriodos = () => {
  return Obra.distinct("periodo").exec();
};
