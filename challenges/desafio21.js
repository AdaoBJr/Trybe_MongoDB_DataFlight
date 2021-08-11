db.voos.find({ litrosCombustivel: { $gt: 1000 } }, { _id: false, vooId: true }).limit(1);
