const Pub = require("../models/pubsModel");
module.exports.list = () => {
  return Pub.find(
    {},
    { _id: 0, booktitle: 0, authors: 0, address: 0, month: 0, doi: 0 }
  );
};
module.exports.listType = t => {
  return Pub.find({ type: t });
};
module.exports.listTypeYear = (t, y) => {
  return Pub.find({ type: t, year: { $gt: y } });
};
module.exports.getById = id => {
  return Pub.find({ id: id });
};
module.exports.getTypes = () => {
  return Pub.distinct("type").exec();
};
module.exports.getAuthors = () => {
  return Pub.aggregate([
    {
      $unwind: "$authors"
    },
    {
      $group: { _id: "$authors" }
    },
    { $sort: { _id: 1 } }
  ]).exec();
};
module.exports.getAuthorPubs = a => {
  return Pub.aggregate([
    {
      $unwind: "$authors"
    },
    {
      $match: { authors: a }
    },
    { $project: { title: 1 } }
  ]).exec();
};
