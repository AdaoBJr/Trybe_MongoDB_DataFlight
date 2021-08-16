db.voos.find({ $and: [{ ano: 2017 }, { "empresa.nome": "GOL" }] },
{
  vooId: 1,
  _id: 0,
  "empresa.nome": 1,
  "aeroportoOrigem.nome": 1,
  "aeroportoDestino.nome": 1,
  ano: 1,
  mes: 1 }).limit(10);
