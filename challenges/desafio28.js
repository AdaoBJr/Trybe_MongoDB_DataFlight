const empresaName = "LATAM AIRLINES BRASIL";
db.resumoVoos.insert({
  empresa: empresaName,
  totalVoosDomesticos:
  db.voos.find({ $and: [
  { "empresa.nome": { $eq: empresaName } },
  { natureza: { $eq: "Doméstica" } }] }).count(),
});

db.resumoVoos.findOne({ empresa: empresaName },
{ empresa: true, totalVoosDomesticos: true, _id: false });
