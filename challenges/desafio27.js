const total = db.voos.count({ "empresa.nome": "PASSAREDO",
    natureza: "Doméstica" });
db.resumoVoos.insertOne({
    empresa: "PASSAREDO",
    totalVoosDomesticos: total });
db.resumoVoos.find({}, { _id: false });