db.voos.findOne(
    { $and: [
        { litrosCombustivel: { $lt: 600 } }, 
        { "empresa.nome": { $nin: ["GOL", "AZUL"] } }] },
        { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true },

);

// { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true }
