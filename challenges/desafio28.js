const EMPRESA = "LATAM AIRLINES BRASIL";

const totalVoos = db.voos.count(
  {
    natureza: "Doméstica",
    "empresa.nome": EMPRESA,
  },
);

db.resumoVoos.insertOne({ empresa: EMPRESA, totalVoosDomesticos: totalVoos });

db.resumoVoos.find(
  {
    empresa: EMPRESA,
  },
  {
    _id: 0,
     empresa: 1,
      totalVoosDomesticos: 1,
  },
);