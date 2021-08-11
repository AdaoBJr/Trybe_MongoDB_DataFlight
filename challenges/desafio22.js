db.voos.findOne({ $and: [
  { $or: [{ "empresa.nome": "DELTA AIRLINES" }, { "empresa.nome": "AMERICAN AIRLINES" }] },
  { "aeroportoOrigem.sigla": { $eq: "SBGR" } },
  { "aeroportoDestino.sigla": { $eq: "KJFK" } }] },
  { vooId: 1, _id: 0 });
