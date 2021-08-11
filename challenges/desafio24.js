const FILTERS = { $and: [{ litrosCombustivel: { $lte: 600 } },
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } }] };

const PROJECTIONS = {
    _id: false,
    vooId: true,
    "empresa.nome": true,
    litrosCombustivel: true };

db.voos.find(FILTERS, PROJECTIONS).limit(1).pretty();
