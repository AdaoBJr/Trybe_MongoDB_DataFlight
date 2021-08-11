// Retorna o vooId do 1° voo em que a empresa seja DELTA AIRLINES ou AMERICAN AIRLINES, a sigla do aeroporto de origem seja SBGR e a sigla do aeroporto de destino seja KJFK.
db.voos.findOne({ $or: [{ "empresa.nome": "DELTA AIRLINES" },
{ "empresa.nome": "AMERICAN AIRLINES" }],
"aeroportoOrigem.sigla": "SBGR",
"aeroportoDestino.sigla": "KJFK" },
{ vooId: 1, _id: 0 });
