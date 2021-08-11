// Retorna os 10 primeiros documentos com voos da empresa GOL do ano de 2017. Exibe os campos vooId, empresa.nome, aeroportoOrigem.nome, aeroportoDestino.nome, mes e ano.
db.voos.find({ "empresa.nome": "GOL", ano: 2017 }, {
  vooId: 1,
  "empresa.nome": 1,
  "aeroportoOrigem.nome": 1,
  "aeroportoDestino.nome": 1,
  mes: 1,
  ano: 1,
  id: 0 }).limit(10).pretty();
