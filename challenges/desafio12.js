db.voos.find(
  { $or:
    [
      { "aeroportoDestino.pais": "ARGENTINA" },
      { "aeroportoDestino.pais": "BRASIL" },
      { "aeroportoDestino.pais": "CHILE" },
    ],
  },
).count();
