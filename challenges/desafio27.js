db.resumeVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.find({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }).count(),
});

db.resumeVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0 });
