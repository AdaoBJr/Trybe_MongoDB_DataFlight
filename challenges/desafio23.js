db.voos.findOne({ litrosCombustivel: { $lte: 1000, $exists: 1 } },
  {
    _id: 0,
    vooId: 1,
    litrosCombustivel: 1,
  });