db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": "PASSAREDO",
    natureza: {
      $eq: "Doméstica",
    },
  }),
});

db.resumoVoos.findOne({}, {
  empresa: 1,
  totalVoosDomesticos: 1,
  _id: 0,
});
