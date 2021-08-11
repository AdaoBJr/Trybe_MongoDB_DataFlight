/* 18 - Retorne o vooId, mes e ano do primeiro voo com mais de 7000 passageiros pagos. */

db.voos.find({ "passageiros.pagos": { $gte: 7000 } }, {
  _id: false, vooId: true, mes: true, ano: true }).limit(1);