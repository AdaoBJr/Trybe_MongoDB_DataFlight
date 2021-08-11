db.voos.find({
  $and: [
    { "aeroportoOrigem.pais": { $ne: "BRASIL" } },
  ],
}).count();