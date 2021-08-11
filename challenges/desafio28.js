const LATAM = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({  
  empresa: LATAM,
  totalVoosDomesticos: db.voos.find({ natureza: "Doméstica", "empresa.nome": LATAM }).count(),
});

db.resumoVoos.findOne({ empresa: LATAM }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
