db.voos.findOne({"passageiros.pagos": { $gt: 7000 } }, {"ano": true, "mes": true, vooId: true, _id: false})
