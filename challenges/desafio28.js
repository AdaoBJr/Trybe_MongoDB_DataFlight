const LATAM_AIRLINES_BRASIL = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({ empresa: LATAM_AIRLINES_BRASIL,
totalVoosDomesticos: db.totalVoosDomesticos.find({
  "empresa.nome": LATAM_AIRLINES_BRASIL,
  natureza: "Doméstica",
}).count() });
db.resumoVoos.findOne({ empresa: LATAM_AIRLINES_BRASIL }, { _id: 0 });