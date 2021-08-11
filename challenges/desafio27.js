db.resumoVoos.insertOne({ empresa: "PASSAREDO",
totalVoosDomesticos: db.totalVoosDomesticos.find({
  "empresa.nome": "PASSAREDO",
  natureza: "Doméstica",
}).count() });
db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0 });