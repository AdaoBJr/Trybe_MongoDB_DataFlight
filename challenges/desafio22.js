const FILTERS = { $and: [{ "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
    { "aeroportoOrigem.sigla": { $eq: "SBGR" } },
    { "aeroportoDestino.sigla": { $eq: "KJFK" } }] };

const PROJECTIONS = { _id: false, vooId: true };

db.voos.find(FILTERS, PROJECTIONS).limit(1).pretty();
