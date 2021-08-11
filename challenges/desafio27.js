const empresa = "PASSAREDO";
const natureza = "Doméstica";
const totalVoosDomesticos = db.voos.count({ $and: [
  { "empresa.nome": empresa }, { natureza },
] });

db.resumoVoos.insertMany([{ empresa, totalVoosDomesticos }]);

db.resumoVoos.find({ empresa }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
