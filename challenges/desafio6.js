const data = {
    _id: false,
    "empresa.sigla": true,
    "empresa.nome": true,
    passageiros: true,
};

db.voos.find({ vooId: 756807 }, data).pretty();
