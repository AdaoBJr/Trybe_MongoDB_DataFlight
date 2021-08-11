db.voos.find({ $or: [
    { "aeroportoDestino.continente": { $ne: "EUROPA" } },
    { "aeroportoDestino.continente": { $ne: "ÁSIA" } },
    { "aeroportoDestino.continente": { $ne: "OCEANIA" } },
],
}).count();
