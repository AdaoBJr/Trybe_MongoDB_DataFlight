db.voos.find({}, { _id: 0, vooID: 1 }).limit(3).skip(9);
