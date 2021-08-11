const lintChato = "LATAM AIRLINES BRASIL";
db.resumeVoos.insertOne({
  empresa: lintChato,
  totalVoosDomesticos: db.voos.find({ "empresa.nome": lintChato, natureza: "Doméstica" }).count(),
});

db.resumeVoos.findOne({ empresa: lintChato }, { _id: 0 });
