db.voos.find(
  { "aeroportoDestino.continente": 
    { $not:
      { $in: ["ÁSIA", "EUROPA", "OCEANIA"] },
    },
  },
).count();
