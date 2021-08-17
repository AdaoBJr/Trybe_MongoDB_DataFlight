db.voos.find({
  "empresa.nome": "PASSAREDO",
  natureza: "Doméstica",
}).count();

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: 4187,
});

db.resumoVoos.find({ empresa: "PASSAREDO" }, { empresa: 1, _id: 0, totalVoosDomesticos: 1 });
