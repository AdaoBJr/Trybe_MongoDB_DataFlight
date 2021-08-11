db.voos.find({ $and: 
    [
    { $or: [
        { "empresa.nome": { $eq: "DELTA AIRLINES" } },
        { "empresa.nome": { $eq: "AMERICAN AIRLINES" } },
    ] },
    { $and: [
        { "aeroportoOrigem.sigla": { $eq: "SBGR" } },
        { "aeroportoDestino.sigla": { $eq: "KJFK" } },
    ] },
    ] }).limit(1);
