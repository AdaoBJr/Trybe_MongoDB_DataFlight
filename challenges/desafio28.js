const result = db.voos.count({
  "natureza": "Doméstica",
  "empresa.nome": "LATAM AIRLINES BRASIL",
});

db.resumoVoos.insertOne({
  "empresa": "LATAM AIRLINES BRASIL",
  "totalVoosDomesticos": result
});

db.resumoVoos.findOne({
    "empresa": "LATAM AIRLINES BRASIL"
  },
  {
    "_id": false
  }
);
