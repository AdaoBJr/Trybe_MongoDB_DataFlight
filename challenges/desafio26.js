db.voos.deleteMany({ "empresa.nome": "GOL", "passageiros.pago": { $gte: 5, $lte: 10 } });
