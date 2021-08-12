db.resumoVoos.insertMany([
  {
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: db.voos.count({
      $and: [
        { "empresa.nome": "LATAM AIRLINES BRASIL" },
        { natureza: "Doméstica" },
      ],
    }),
  },
]);

db.resumoVoos.find({ empresa: /^LAT/ }, { _id: 0 });
