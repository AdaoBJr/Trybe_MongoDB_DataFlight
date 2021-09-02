db.voos.findOne(
    { "passageiros.pagos": { $gt: 4000 } },
    {
        _id: 0,
        vooId: 1,
        mes: 1,
        ano: 1,
    },
);