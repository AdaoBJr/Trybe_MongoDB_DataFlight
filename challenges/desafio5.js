// pule os primeiros 9 documentos e conte 3
db.voos.find({}, { vooId: 1, _id: 0 }).limit(3).skip(9);