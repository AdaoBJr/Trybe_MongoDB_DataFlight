const result = db.voos.find(
  {
    "empresa.nome": "LATAM AIRLINES BRASIL",
    natureza: "Doméstica",
  },
);

db.resumoVoos.insertOne(
  {
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: result.count(),
  },
);

db.resumoVoos.find({}, { _id: false });