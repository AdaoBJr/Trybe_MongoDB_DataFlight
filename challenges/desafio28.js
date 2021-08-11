const NAME = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({ 
  empresa: NAME,
totalVoosDomesticos: db.voos.find({ 
  $and: [{ "empresa.nome": NAME }, { natureza: "Doméstica" }] }).count() });

db.resumoVoos.findOne({ empresa: NAME }, { _id: 0 });
