db.voos.find({ "aeroportoOrigem.pais": { $ne: "ESTADOS UNIDOS" } }).count();
