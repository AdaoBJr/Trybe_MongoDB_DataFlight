db.voos
    .findOne({
        $or: [{ empresa: "DELTA AIRLINES" }, { empresa: "AMERICAN AIRLINES" }],
        $and: [{ "aeroportoOrigem.sigla": "SBGR" }, { "aeroportoDestino.sigla": "KJFK" }] },
        { _id: 0, vooId: 1 });
