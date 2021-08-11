db.voos.count(
  {
    "aeroportoDestino.continente": { $ne: { $in: ["EUROPA", "ÁSIA", "OCEANIA"] } },
  },
);
