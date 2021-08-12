const totalVoosDomesticos = db.voos
  .find({
    natureza: "Doméstica",
    "empresa.nome": "PASSAREDO",
  })
  .count();

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos,
});

db.resumoVoos.findOne({ "empresa.nome": "PASSAREDO" },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
