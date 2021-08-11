db.voos
.find({ $nor: [{ litrosCombustivel: { $gt: 1000 } },
  { litrosCombustivel: { $exists: false } }] },
  { _id: false, vooId: true, litrosCombustivel: true }).limit(1);