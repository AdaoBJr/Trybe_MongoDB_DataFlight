const LATAM = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: LATAM,
  totalVoosDomesticos: db.voos.count({
    natureza: "Doméstica",
    "empresa.nome": LATAM,
  }),
});

db.resumoVoos.findOne({
  empresa: LATAM,
}, {
  _id: 0,
});