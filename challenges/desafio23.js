db.voos.find({
    litrosCombustivel: { $gt: 1000 },
    litrosCombustivel: { $exists: 1 },
  },
  {
    _id: 0,
    vooId: 1,
    litrosCombustivel: 1,
  }).limit(1);
