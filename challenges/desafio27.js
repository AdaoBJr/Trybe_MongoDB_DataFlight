const totalCount = db.voos.find(
  {
    natureza: "Doméstica",
    "empresa.nome": "PASSAREDO",
  },
).count();

db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: totalCount });

db.resumoVoos.find({}, { _id: false, empresa: true, totalVoosDomesticos: true });