db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count(
  { $and: [
    { "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" },
  ],
  },
),
});

db.resumoVoos.findOne(
  { empresa: "LATAM AIRLINES BRASIL" },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
