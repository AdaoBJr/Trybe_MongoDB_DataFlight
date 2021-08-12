
db.voos.findOne(
  { litrosCombustivel: { $exists: true , $lt: 1000} },
  { vooId: true, _id: false, litrosCombustivel: true }
);
