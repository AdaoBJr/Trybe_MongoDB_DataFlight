const FILTERS = { litrosCombustivel: { $gte: 1000 } };

const PROJECTIONS = { _id: false, vooId: true };

db.voos.find(FILTERS, PROJECTIONS).limit(1).pretty();
