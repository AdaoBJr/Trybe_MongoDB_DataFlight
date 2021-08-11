// Retorna a quantidade de voos de natureza Doméstica que a empresa PASSAREDO possui, via uso de uma nova coleção chamada resumoVoos.
db.voos.find({ natureza: "Doméstica", "empresa.nome": "PASSAREDO" }).count();

db.resumoVoos.insertOne({ empresa: "PASSAREDO",
totalVoosDomesticos: db.voos.find({
  natureza: "Doméstica", "empresa.nome": "PASSAREDO" }).count(),
});

db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0 });
