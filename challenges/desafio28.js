/* 28 - Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos.
*/
const empresa = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos: db.voos.count({
    $and: [
      { natureza: "Doméstica" },
      { "empresa.nome": empresa },
    ],
  }),
});
db.resumoVoos.findOne(
  { empresa },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);
