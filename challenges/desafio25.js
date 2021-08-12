db.voos.count(db.voos.deleteMany({ litrosCombustivel: { $lt: 400 } }));
