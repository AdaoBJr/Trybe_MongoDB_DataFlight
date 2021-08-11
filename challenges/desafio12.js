db.voos.count(
  {
    "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] },
  },
);
db.voos.count({  });