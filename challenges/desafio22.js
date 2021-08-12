db.voos
    .findOne({
        $or: [{ "empresa.nome": "DELTA AIRLINES" }, { "empresa.nome": "AMERICAN AIRLINES" }],
        "aeroportoOrigem.sigla": "SBGR",
        "aeroportoDestino.sigla": "KJFK" }, { _id: 0, vooId: 1 });

// db.voos
//     .findOne({ $and: [
//         { $or: [{ empresa: "DELTA AIRLINES" }, { empresa: "AMERICAN AIRLINES" }] },
//         { "aeroportoOrigem.sigla": "SBGR" },
//         { "aeroportoDestino.sigla": "KJFK" }] },
//         { _id: 0, vooId: 1 });
