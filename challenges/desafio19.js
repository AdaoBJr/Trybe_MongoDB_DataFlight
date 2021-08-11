db.voos.find({ litrosCombustivel: { $exists: true } }).pretty().limit(1);
