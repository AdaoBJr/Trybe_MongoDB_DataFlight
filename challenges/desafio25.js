db.voos.createIndex({ _id: 1 });

db.voos.deleteMany(
  {
    $and: [
      { "empresa.nome": "AZUL" },
      { litrosCombustivel: { $lt: 400 } },
    ],
  },
  { _id: 1 },
);

// source https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/