db.voos.findOne({ 
  $and: [{ 
      litrosCombustivel: { $not: { $gt: 600 } } }, { 
        litrosCombustivel: { $exists: 1 } }, { 
          "empresa.nome": { $nin: ["GOL", "AZUL"] } }] }, {
             _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 });
