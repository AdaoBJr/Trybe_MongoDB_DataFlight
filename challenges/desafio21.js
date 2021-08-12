db.voos.findOne({ litrosCombustivel: { $gt: 1000 } }, { vooId: true, _id: false });
