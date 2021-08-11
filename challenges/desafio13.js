db.voos.find({ "aeroportoOrigem.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } }).count();
