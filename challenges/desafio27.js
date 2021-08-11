const empresa = "PASSAREDO";
const totalVoosDomesticos = db.voos.count({ $and: [
  { "empresa.nome": empresa }, { natureza: "Doméstica" },
] });

db.resumoVoos.insertMany([{ empresa, totalVoosDomesticos }]);

db.resumoVoos.find({ empresa: "PASSAREDO" }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
