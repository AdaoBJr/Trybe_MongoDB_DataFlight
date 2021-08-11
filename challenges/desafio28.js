const LATAM_AIRLINES_BRASIL = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne(
  {
    empresa: LATAM_AIRLINES_BRASIL,
    totalVoosDomesticos: db.voos.count(
      {
        $and: [
          { "empresa.nome": LATAM_AIRLINES_BRASIL },
          { natureza: "Doméstica" },
        ],
      },
    ),
  },
);

db.resumoVoos.findOne(
  {
    empresa: LATAM_AIRLINES_BRASIL,
  },
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 1,
  },
);
