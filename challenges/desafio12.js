db.voos.find({ "aeroportoDestino.pais": { $in: ["ARGENTINA", "CHILE", "BRASIL"] } }).count();
