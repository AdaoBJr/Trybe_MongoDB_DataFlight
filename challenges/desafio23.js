db.voos.findOne(
  { litrosCombustivel: { $lt: 1000 }, litrosCombustivel: { $exists: true } },
  { vooId: true, _id: false, litrosCombustivel: true });
