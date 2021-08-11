db.voos.find({ "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] } }).count();
db.voos.find({ "aeroportoDestino.pais": { $eq: ["BRASIL", "ARGENTINA", "CHILE"] } }).count();
