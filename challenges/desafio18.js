db.voos.find({ "passageiros.pagos": { $gte: 7000 } }, { vooId: true, mes: true, ano: true, _id: false });
