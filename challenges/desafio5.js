db.voos.find({}, { "_id": 0, "vooId": 1 }).limit(2).skip(10);
