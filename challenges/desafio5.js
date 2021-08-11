db.voos.find({}, { _id: false, vooId: true }).skip(10).limit(2);
