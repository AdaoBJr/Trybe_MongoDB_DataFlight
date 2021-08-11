db.voos.count(
  {
    "aeroportoOrigem.pais": { "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } },
  },
);
