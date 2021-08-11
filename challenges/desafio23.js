db.voos.findOne(
  { 
    litrosCombustivel: { $lte: 1000, $exists: 1 },
  },
  { vooId: 1, _id: 0, litrosCombustivel: 1 },
);
