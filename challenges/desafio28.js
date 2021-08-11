const nomeEmpresa = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne(
  {
    empresa: nomeEmpresa,
    totalVoosDomesticos: db.voos.count(
      { $and:
        [
          {
            natureza: "Doméstica",
            "empresa.nome": nomeEmpresa,
          },
        ],
      },
    ),
  },
);

db.resumoVoos.findOne(
  {
    empresa: nomeEmpresa,
  },
  {
    _id: false,
    empresa: true,
    totalVoosDomesticos: true,
  },
);
