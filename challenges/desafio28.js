db.voos.find({
  "empresa.nome": "LATAM AIRLINES BRASIL",
  natureza: "Doméstica",
}).count();

db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: 20026,
});

db.resumoVoos.find({}, { empresa: 1, _id: 0, totalVoosDomesticos: 1 });
