db.resumoVoos.insert({
  empresa: "PASSAREDO",
  totalVoosDomesticos:
  db.voos.find({ $and: [
  { "empresa.nome": { $eq: "PASSAREDO" } },
  { natureza: { $eq: "Doméstica" } }] }).count(),
});
db.resumoVoos.findOne({ empresa: "PASSAREDO" },
{ empresa: true, totalVoosDomesticos: true, _id: false });