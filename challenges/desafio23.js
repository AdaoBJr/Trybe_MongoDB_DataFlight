db.voos.find(
    { litrosCombustivel: { $lte: 1000, $exists: true } }, 
    { vooId: 1, litrosCombustivel: 1, _id: 0 },
).sort({ ano: 1 }).limit(1);
