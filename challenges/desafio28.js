const ENTERPRISE = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa: ENTERPRISE,
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": ENTERPRISE,
    natureza: "Doméstica",
  }),
});

db.resumoVoos.findOne({ empresa: ENTERPRISE },
{ empresa: 1, totalVoosDomesticos: 1, _id: 0 });