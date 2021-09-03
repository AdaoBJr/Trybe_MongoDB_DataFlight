db.voos.find({ "aeroportoDestino.pais": { $nin: ["BRASIL", "ARGENTINA", "CHILE"] } }).count();
