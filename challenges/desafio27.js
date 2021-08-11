const BUSINESS = "PASSAREDO";
const PROJECTIONS = { _id: false, empresa: true, totalVoosDomesticos: true };
const COUNTER = db.voos.count({ "empresa.nome": BUSINESS, natureza: "Doméstica" });

db.resumoVoos.insertOne({ empresa: BUSINESS, totalVoosDomesticos: COUNTER });

db.resumoVoos.find({ empresa: BUSINESS }, PROJECTIONS).limit(1).pretty();
