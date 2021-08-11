const result = db.voos.find(
  {
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica",
  },
);

db.resumoVoos.insertOne(
  {
    empresa: "PASSAREDO",
    totalVoosDomesticos: result.count(),
  },
);

db.resumoVoos.find({}, { _id: false });