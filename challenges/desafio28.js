const latam = "LATAM AIRLINES BRASIL";
db.voos.updateMany({ "empresa.nome": latam, natureza: "Doméstica" },
 { $set: { empresa: latam, totalVoosDomesticos: 20026 } });

db.voos.find({ 
  natureza: "Doméstica", 
  empresa: latam },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 }).limit(1).pretty();