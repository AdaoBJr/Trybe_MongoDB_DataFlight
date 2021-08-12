db.voos.deleteMany({
  $and: [
    { "passageiros.pagos": { $in: [5, 6, 7, 8, 9, 10] } },
    { "empresa.nome": "GOL" },
  ],
});
