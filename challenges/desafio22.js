db.voos.findOne({ 
  $or: [
    { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } }],
$and: [{
   "aeroportoOrigem.sigla": "SBGR" }, { "aeroportoDestino.sigla": "KJFK" }] }, {
      _id: 0, vooId: 1 });

// use("dataFlights");
// db.voos.findOne( { $and:  [ {"aeroportoOrigem.sigla": "SBGR" } ,{"aeroportoDestino.sigla": "KJFK"}, { $or: [ { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } }] }] }, {_id:0,"vooId": 1 });
