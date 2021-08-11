db.voos.find({
  "aeroportoDestino.pais":
    {
      $eq: ["BRASIL", "ARGENTINA", "CHILE"],
    },
  }).count();
