db.voos.find({}, { vooID: 1, _id: 0 }).skip(9).limit(3);
