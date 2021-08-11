const empresaArea = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne(
  { 
    empresa: empresaArea, 
    totalVoosDomesticos: 
    db.voos.count({ "empresa.nome": empresaArea, natureza: "Doméstica" }),
  },
);
db.resumoVoos.find(
  { empresa: empresaArea },
  { empresa: true, totalVoosDomesticos: true, _id: false },
);