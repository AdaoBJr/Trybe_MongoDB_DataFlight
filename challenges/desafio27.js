db.resumoVoos.insertOne({ 
  empresa: "PASSAREDO",
totalVoosDomesticos: db.voos.find({
     $and: [{ "empresa.nome": "PASSAREDO" }, { natureza: "Doméstica" }] }).count() });

db.resumoVoos.findOne({}, { _id: 0 });
