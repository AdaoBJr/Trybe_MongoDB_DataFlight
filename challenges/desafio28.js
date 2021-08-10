const EMPRESA = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne(
  {
    empresa: EMPRESA,
    totalVoosDomesticos: (
      db.voos.find(
        {
          $and: [
            { natureza: "Doméstica" },
            { "empresa.nome": EMPRESA },
          ],
        },
      ).count()
    ),
  },
);

db.resumoVoos.findOne(
  { empresa: EMPRESA },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);