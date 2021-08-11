db.voos.find({}, { _id: false, vooId: 1 }).skip(9).limit(3);
