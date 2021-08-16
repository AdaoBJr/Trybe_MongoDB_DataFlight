const referenceCompany = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: referenceCompany,
  totalVoosDomesticos: db.voos.count({
    $and: [
      { "empresa.nome": referenceCompany },
      { natureza: "Doméstica" },
    ],
  }),
});

db.resumoVoos.find({
  empresa: referenceCompany,
},
{
  _id: 0,
  empresa: 1,
  totalVoosDomesticos: 1,
}).limit(1);
