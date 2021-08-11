const qtdVoos = db.voos.find(
  { 
    "empresa.nome": "PASSAREDO", 
    natureza: "Doméstica", 
  },
).count();

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: qtdVoos,
});

db.resumoVoos.find(
  { empresa: "PASSAREDO" },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
).limit(1);
