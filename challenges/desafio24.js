db.voos.findOne({ 
$nor: [
{ "empresa.nome": "GOL" },
{ "empresa.nome": "AZUL" },
], 
$and: [
{ litrosCombustivel: { $exists: true } },
{ litrosCombustivel: { $not: { $gt: 600 } } },
] },
{ vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 });
