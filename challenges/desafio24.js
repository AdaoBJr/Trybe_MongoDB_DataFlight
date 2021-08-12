db.voos.find(
    {
        litrosCombustivel: { $lt: 600, $exists: true },
        "empresa.nome": { $nin: ["GOL", "AZUL"] },
    },
    { vooId: 1, _id: 0, litrosCombustivel: 1, "empresa.nome": 1 },
  ).limit(1);
