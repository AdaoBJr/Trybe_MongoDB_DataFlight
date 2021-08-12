db.voos.deleteMany({ "empresa.nome": "GOL", "passageiros.pagos": { $gte: 5, $lte: 10 } });
const totalVoosDomesticos = db.voos
.find({
  natureza: "Doméstica",
  "empresa.nome": "PASSAREDO",
})
.count();

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos,
});
