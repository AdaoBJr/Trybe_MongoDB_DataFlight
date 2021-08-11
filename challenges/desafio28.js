const LATAM_AIRLINES_BRASIL = "LATAM AIRLINES BRASIL";
db.voos.find({ natureza: "Doméstica", "empresa.nome": LATAM_AIRLINES_BRASIL }).count();

db.resumoVoos.insertOne({
  empresa: LATAM_AIRLINES_BRASIL,
  totalVoosDomesticos: db.voos.find({
     natureza: "Doméstica", "empresa.nome": LATAM_AIRLINES_BRASIL }).count(),
});

db.resumoVoos.findOne({ empresa: LATAM_AIRLINES_BRASIL }, { _id: 0 });