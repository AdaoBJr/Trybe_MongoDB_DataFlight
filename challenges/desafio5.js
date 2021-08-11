// Retorna o vooId do 10° ao 12° documento da coleção voos.
db.voos.find({}, { vooId: 1, _id: 0 }).limit(3).skip(9).pretty();
