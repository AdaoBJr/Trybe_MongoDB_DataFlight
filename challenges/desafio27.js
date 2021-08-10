db.voos.deleteMany(
  {
    "empresa.nome": "GOL",
    "litrosCombustivel": { $lt: 400 },
  }
);
