db.voos.count(
  {
    "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "OCEANIA"] },
  },
);