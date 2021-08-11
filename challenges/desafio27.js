db.resumoVoos.insert({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica",
  }),
});

db.resumoVoos.find(null, { _id: 0 });
