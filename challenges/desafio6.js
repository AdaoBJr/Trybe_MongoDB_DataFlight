db.voos.find(
  { vooId: 756807 },
  { "empresa.sigla": 1, "empresa.nome": 1, vooId: 1, passageiros: 1 },
);
