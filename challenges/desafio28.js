db.resumoVoos.insert({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.voos.find({ natureza: { $eq: "Doméstica" },
  "empresa.nome": { $eq: "LATAM AIRLINES BRASIL" } }).count(),
});

db.resumoVoos.findOne({}, { _id: false, empresa: true, totalVoosDomesticos: true });