var Filme = require("../models/filme");

const Filmes = module.exports;

Filmes.listar = () => {
  return Filme.find()
    .sort({ title: 1 })
    .exec();
};
Filmes.consultar = fid => {
  return Filme.findOne(fid).exec();
};
Filmes.contar = () => {
  return Filme.countDocuments().exec();
};
// estas últimas funçoes foram copiadas à pressa, verificar.
Filmes.projetar = campos => {
  return Filme.find({}, campos).exec();
};
Filmes.agregar = () => {
  return Filme.aggregate([
    { $group: { _id: "$" + campo, contador: { $sum: 1 } } },
    { $sort: { contador: -1 } }
  ]).exec();
};
