const FILTERS = { "passageiros.pagos": { $gt: 7000 } };

const PROJECTIONS = { 
    _id: false, 
    vooId: true, 
    mes: true, 
    ano: true,
};

db.voos.find(FILTERS, PROJECTIONS).limit(1).pretty();
