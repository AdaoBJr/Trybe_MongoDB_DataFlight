db.voos.deleteMany({ $and: [
    { "empresa.nome": { $eq: "GOL" } },
    { "passageiros.pagos": { $gte: 5 } },
    { "passageiros.pagos": { $lte: 10 } },
],
});
