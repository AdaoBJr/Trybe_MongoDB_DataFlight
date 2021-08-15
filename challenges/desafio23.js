db.voos.findOne(
    { $and: [{ litrosCombustivel: { $lt: 1000 } }, { litrosCombustivel: { $exists: true } }] },
    { _id: false, vooId: true, litrosCombustivel: true },
);
