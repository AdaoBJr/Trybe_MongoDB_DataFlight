db.voos.find({ "empresa.nome": "GOL", ano: { $in: [2017] } },
{ vooId: true, "empresa.nome": true, "aeroportoOrigem.nome": true,
"aeroportoDestino.nome": true, ano: true, mes: true, _id: false }).limit(10);
