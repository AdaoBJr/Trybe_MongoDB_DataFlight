const LATAM_AIRLINES_BRASIL = "LATAM AIRLINES BRASIL";
db.resumoVoos.insert({
  empresa: LATAM_AIRLINES_BRASIL,
  totalVoosDomesticos: db.voos.find({
    $and: [{
      "empresa.nome": LATAM_AIRLINES_BRASIL }, { natureza: "Doméstica" }],
  }).count(),
});
db.resumoVoos
  .find({
    empresa: LATAM_AIRLINES_BRASIL,
  }, {
    _id: false,
    empresa: true,
    totalVoosDomesticos: true,
  }).limit(1);