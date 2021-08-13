const EMPRESA = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: EMPRESA,
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": EMPRESA,
    natureza: {
      $eq: "Doméstica",
    },
  }),
});

db.resumoVoos.findOne({ empresa: EMPRESA }, {
  empresa: 1,
  totalVoosDomesticos: 1,
  _id: 0,
});
