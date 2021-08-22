db.voos.find({ "aeroportoOrigem.nome": { $nin: ["BRASIL"] } }).count();
