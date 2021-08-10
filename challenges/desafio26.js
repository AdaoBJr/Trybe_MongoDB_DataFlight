db.voos.deleteMany({ "empresa.nome": "GOL", passageiros: { $gte: 5, $lte: 10 } });
