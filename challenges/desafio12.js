db.voos.find({ "aeroportoOrigem.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] } }).count();
