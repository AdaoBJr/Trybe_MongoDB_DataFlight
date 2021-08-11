const LATAM = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: LATAM,
  totalVoosDomesticos: db.voos.count(
  { $and: 
    [
      { "empresa.nome": "LATAM AIRLINES BRASIL" },
      { natureza: "Doméstica" },
    ],
  },
),
});

db.resumoVoos.find(
  { empresa: LATAM }, 
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
