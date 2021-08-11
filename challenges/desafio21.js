db.voos.findOne({ litroCombustivel: { $gte: 1000 } }, { vooId: 1, _id: 0 });
