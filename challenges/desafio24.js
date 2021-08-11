db.voos.findOne(
    {
        $and: [
            { litrosCombustivel: { $exists: 1, $lte: 600 } },
            { "empresa.nome": { $nin: ["AZUL", "GOL"] } },
        ],
    },
    { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 },
);
