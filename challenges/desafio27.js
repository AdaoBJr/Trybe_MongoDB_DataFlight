const numFlight = db.voos.find({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }).count();
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: numFlight });
db.resumoVoos.find({ empresa: "PASSAREDO" }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
