const empresa = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne(
  { 
    empresa, 
    totalVoosDomesticos: db.voos.find(
      { 
        $and: [
          { "empresa.nome": empresa }, 
          { natureza: "Doméstica" },
        ], 
      },
    ).count(), 
  },
);

db.resumoVoos.findOne({ empresa }, { _id: false });