db.voos.findOne(
  {
    litrosCombustivel: { $exists: true, $lte: 2000 },
  },
  {
    _id: false,
    vooId: true,
    litrosCombustivel: true,
  },
);