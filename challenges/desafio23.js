db.voos.findOne({ 
  $and: [
    { litroCombustivel: { $lt: 1000 } },
    { litroCombustivel: { $exists: true } },
  ] }, 
  { vooId: 1, litroCombustivel: 1, _id: 0 });
