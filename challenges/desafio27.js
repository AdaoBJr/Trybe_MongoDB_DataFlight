/* 27. Retorne a quantidade total de voos de natureza Doméstica que a empresa PASSAREDO possui, via uso de uma nova coleção chamada resumoVoos.
*/
db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({
    $and: [
      { natureza: "Doméstica" },
      { "empresa.nome": "PASSAREDO" },
    ],
  }),
});
db.resumoVoos.findOne(
  { empresa: "PASSAREDO" },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);
