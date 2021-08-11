db.voos.find(
  {
    "empresa.nome": "GOL",
    ano: { $eq: 2017 },
  },
  { 
    _id: false,
    vooId: true,
    "empresa.nome": true,
    "aeroportoOrigem.nome": true,"aeroportoDestino.nome": true,
    mes: true,
    ano: true,
  },
);
