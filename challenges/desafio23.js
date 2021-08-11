const FILTERS = { $and: [{ litrosCombustivel: { $lt: 1000 } },
    { litrosCombustivel: { $exists: true } }] };

const PROJECTIONS = { _id: false, vooId: true, litrosCombustivel: true };

db.voos.find(FILTERS, PROJECTIONS).limit(1).pretty();
