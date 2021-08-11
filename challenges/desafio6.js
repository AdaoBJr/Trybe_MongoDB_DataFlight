db.voos.find({vooId: { $eq: 756807 } }, {"empresa.sigla": true, "empresa.nome": true, passageiros: true, _id: false});
