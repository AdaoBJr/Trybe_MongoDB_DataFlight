const PASSAREDO = "PASSAREDO";
db.voos.find({ "empresa.nome": PASSAREDO, natureza: "Doméstica" }).count();
db.resumoVoos.insertOne({ 
  empresa: PASSAREDO,
  totalVoosDomesticos: db.voos.find({ "empresa.nome": PASSAREDO,
  natureza: "Doméstica" }).count(),
});

db.resumoVoos.findOne({ empresa: PASSAREDO }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
