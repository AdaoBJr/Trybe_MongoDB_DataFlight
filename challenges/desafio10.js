db.voos.find(
  {"empresa.nome": { $eq: "GOL"}},
  {_id:false,
    vooId:true,
    "empresa.nome":true,
    "aeroportoOrigem.nome":true,
    mes:true,
    ano:true
  }
).limit(10);
