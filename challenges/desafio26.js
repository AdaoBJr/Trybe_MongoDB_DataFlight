db.voos.count({ "empresa.nome": "GOL", "passageiros.pagos": { $gte: 5, $lte: 10 } });
db.voos.deleteMany({ "empresa.nome": "GOL", "passageiros.pagos": { $gte: 5, $lte: 10 } });
