db.voos.findOne({ litrosCombustivel: { $ne: 1000 }, litrosCombustivel: { $exists: true } }, { _id: 0, vooId: 1, litrosCombustivel: 1 });
