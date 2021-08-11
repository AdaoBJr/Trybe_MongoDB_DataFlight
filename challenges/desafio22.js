db.voos
.find({ $or: [{ "empresa.nome": { $eq: "DELTA AIRLINES" } },
 { "empresa.nome": { $eq: "AMERICAN AIRLINES" } }],
$and: [{ "aeroportoOrigem.sigla": { $eq: "SBGR" } },
 { "aeroportoDestino.sigla": { $eq: "KJFK" } }] }, { _id: false, vooId: true }).limit(1);
