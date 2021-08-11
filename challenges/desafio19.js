/* 19 - Retorne o vooId do primeiro voo em que o campo litrosCombustivel exista. */

db.voos.findOne({ litrosCombustivel: { $exists: true } }, { _id: false, vooId: true });