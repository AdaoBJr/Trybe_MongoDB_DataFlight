db.voos.find(
  {
    litrosCombustivel: { $exists: true, $lte: 2000 },
  },
  {
    _id: 0,
    vooId: 1,
    litrosCombustivel: 1,
  },
).limit(1);