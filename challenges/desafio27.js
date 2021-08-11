const result = db.voos.count(
  {
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica",
  },
);

db.resumoVoos.insertOne(
  {
    empresa: "PASSAREDO",
    totalVoosDomesticos: result,
  },
);

db.resumoVoos.find({}, { _id: false });
