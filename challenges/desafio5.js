db.voos.find({}, { vooID: 1, _id: 0 }).limit(3).skip(9);
