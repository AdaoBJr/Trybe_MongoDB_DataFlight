// Retorna a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos.
db.voos.find({ natureza: "Doméstica", "empresa.nome": "LATAM_AIRLINES_BRASIL" }).count();

db.resumoVoos.insertOne({
  empresa: "LATAM_AIRLINES_BRASIL",
  totalVoosDomesticos: db.voos.find({
     natureza: "Doméstica", "empresa.nome": "LATAM_AIRLINES_BRASIL" }).count(),
});

db.resumoVoos.findOne({ empresa: "LATAM_AIRLINES_BRASIL" }, { _id: 0 });
