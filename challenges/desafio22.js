db.voos.findOne({ empresa: { 
  $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } }, { _id: 0, vooId: 1 });