db.voos.find(
  { vooId: 756807 }, 
  { 
    "empresa.sigla": true,
    "empresa.nome": 1, 
    passageiros: 1,
    _id: 0,
  },
);