db.voos.find(
    { $and: [{ ano: { $eq: 2017 } }, { "empresa.nome": { $eq: "GOL" } }] },
    { _id: false,
    vooId: true, 
    "empresa.nome": true,
    "aeroportoOrigem.nome": true,
    "aeroportoDestino.nome": true,
    mes: true,
    ano: true },
    ).limit(10);