db.voos
    .findOne({
        $and: [{ litrosCombustivel: { $lte: 600 } },
            { empresa: { $nin: ["GOL", "AZUL"] } },
            { litrosCombustivel: { $exists: 1 } }],
    }, { _id: 0, "empresa.nome": 1, litrosCombustivel: 1 });
