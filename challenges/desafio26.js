db.voos.createIndex({ _id: 1 });

db.voos.deleteMany(
  {
    $and: [
      { "empresa.nome": "GOL" },
      {
        $and: [
          { "passageiros.pagos": { $gte: 5 } },
          { "passageiros.pagos": { $lte: 10 } },
        ],
      },
    ],
  },
  { _id: 1 },
);
