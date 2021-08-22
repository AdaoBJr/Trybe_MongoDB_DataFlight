db.voos.find({ "empresa.nome": { $in: ["AMERICAN AIRLINES", "DELTA AIRLINES"] }, 
"aeroportoOrigem.sigla": "SBGR", 
"aeroportoDestino.sigla": "KJFK",
}, { _id: 0, vooId: 1 }).limit(1).pretty();
