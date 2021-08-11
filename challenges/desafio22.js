db.voos.find({
  "empresa.nome": {
    $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"],
  },
  $and: [{
    "aeroportoOrigem.sigla": "SBGR",
  }, {
    "aeroportoDestino.sigla": "KJFK",
  }],
}, {
  _id: false,
  vooId: true,
}).limit(1);