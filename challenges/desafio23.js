db.voos.findOne(
  { litrosCombustivel: { $exists: true, $lte: 1000 } }, 
  { _id: false, vooId: 1, litrosCombustivel: 1 },
);
