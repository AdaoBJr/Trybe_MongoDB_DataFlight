db.resumoVoos.insertOne(
  { 
    empresa: "PASSAREDO",
    totalVoosDomesticos:
    db.voos.count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }), 
  },
);
db.resumoVoos.find(
  { empresa: "PASSAREDO" },
  { empresa: true, totalVoosDomesticos: true, _id: false },
);
