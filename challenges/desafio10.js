const FILTERS = [
    { "empresa.nome": { $eq: "GOL" } },
    { ano: { $eq: 2017 } },
];

const PROJECTIONS = {
    _id: false,
    vooId: true,
    "empresa.nome": true,
    "aeroportoOrigem.nome": true,
    "aeroportoDestino.nome": true,
    mes: true,
    ano: true,
};

db.voos.find({ $and: FILTERS }, PROJECTIONS).limit(10).pretty();
