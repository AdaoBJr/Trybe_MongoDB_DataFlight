db.voos.findOne(
{ $and: [{ litrosCombustivel: { $exists: 1 } }, 
{ litrosCombustivel: { $not: { $gt: 600 } } }, 
{ "empresa.nome": { $nin: ["GOL", "AZUL"] } }], 
},
);