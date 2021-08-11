db.voos.findOne({ $and: [{ "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"]}}, {"aeroportoOrigem.sigla": "SBGR"}, {"aeroportoOrigem.sigla": "SBGR"}]}, {_id: 0, vooId: 1});
