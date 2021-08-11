/* 20 - Retorne o vooId do primeiro voo em que o campo rtk não exista. */

db.voos.findOne({ rtk: { $exists: false } }, { _id: false, vooId: true });