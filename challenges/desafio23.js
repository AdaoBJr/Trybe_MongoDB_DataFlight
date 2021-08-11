db.voos.findOne({ litrosCombustivel: { $ne: 1000,
  $exists: true } },
  { _id: 0, vooId: 1, litrosComustivel: 1 });
