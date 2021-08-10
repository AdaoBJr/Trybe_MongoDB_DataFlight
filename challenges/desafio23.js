db.voos.findOne(
  { litrosCombustivel: { $not: { $gte: 1000 }, $exists: true } },
   { vooId: 1, litrosCombustivel: 1, _id: 0 },
);