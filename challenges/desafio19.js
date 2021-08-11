const FILTERS = { litrosCombustivel: { $exists: true } };

const PROJECTIONS = { _id: false, vooId: true };

db.voos.find(FILTERS, PROJECTIONS).limit(1).pretty();
