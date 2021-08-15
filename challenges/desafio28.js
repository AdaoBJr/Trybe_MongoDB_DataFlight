const empresa = "LATAM AIRLINES BRASIL";

const total = db.voos.count({
  natureza: "Doméstica",
  "empresa.nome": empresa,
});

db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos: total,
});

db.resumoVoos.findOne({
    empresa,
  },
  {
    _id: false,
  });
