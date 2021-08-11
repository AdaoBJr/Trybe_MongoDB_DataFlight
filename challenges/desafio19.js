// Retorna o vooId do primeiro voo em que o campo litrosCombustivel exista.
db.voos.findOne({ litrosCombustivel: { $exists: true } }, { vooId: 1 });
