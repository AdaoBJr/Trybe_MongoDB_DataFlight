db.voos.find({}, { vooId: 1, _id: false }).limit(3).skip(9).pretty();
