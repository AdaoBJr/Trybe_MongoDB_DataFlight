db.voos.createIndex({ _id: 1 });

db.voos.deleteMany(
  {
    $and: [
      { "empresa.nome": "GOL" },
      { "passageiros.pagos": { $gte: 5, $lte: 10 } },
    ],
  },
  { _id: 1 },
);
