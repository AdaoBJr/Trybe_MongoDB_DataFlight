const nomeEmpresa = "LATAM AIRLINES BRASIL";

const result = db.voos.count({
  natureza: "Doméstica",
  "empresa.nome": nomeEmpresa,
});

db.resumoVoos.insertOne({
  empresa: nomeEmpresa,
  totalVoosDomesticos: result,
});

db.resumoVoos.findOne({
    empresa: nomeEmpresa,
  },
  {
    _id: false,
  });
