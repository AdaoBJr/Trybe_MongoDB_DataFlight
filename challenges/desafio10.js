db.voos.find({ $and: [{ ano: 2017 }, { "empresa.nome": "GOL" }] }).limit(10);
