const COMPANY = "LATAM AIRLINES BRASIL";

const total = db.voos.find(
  {
    natureza: "Doméstica",
    "empresa.nome": COMPANY,
  },
).count();

db.resumoVoos.insertOne({ empresa: COMPANY, totalVoosDomesticos: total });

db.resumoVoos.find(
  {
    empresa: COMPANY,
  },
  {
    empresa: true,
    totalVoosDomesticos: true,
    _id: false,
  },
);