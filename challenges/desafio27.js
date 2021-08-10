db.voos.find({ natureza: "Doméstica", "empresa.nome": "PASSAREDO" }, { _id: 0 }).count();

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.find({
     natureza: "Doméstica", "empresa.nome": "PASSAREDO" }, { _id: 0 }).count(),
});

db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0 });