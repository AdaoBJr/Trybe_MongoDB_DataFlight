const empresaLATAM = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: empresaLATAM,
  totalVoosDomesticos: db.voos.find({
    "empresa.nome": empresaLATAM,
    natureza: "Doméstica",
  }).count(),
});

db.resumoVoos.find({
  empresa: empresaLATAM,
}, {
  _id: false,
  empresa: true,
  totalVoosDomesticos: true,
});