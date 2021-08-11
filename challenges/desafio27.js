db.resumoVoos.insertOne(
  {
    empresa: {
      nome: "PASSAREDO",
      totalVoosDomesticos: db.voos.find(
        {
          natureza: "Doméstica",
          "empresa.nome": "PASSAREDO",
        },
      ).count(),
    },
  },
);

db.resumoVoos.find(
  {
    "empresa.nome": "PASSAREDO",
  },
  {
    _id: false,
    empresa: true,
    totalVoosDomesticos: true,
  }
);
