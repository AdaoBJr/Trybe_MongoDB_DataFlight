const nameFlight = "LATAM AIRLINES BRASIL";
const numFlight = db.voos.find({ "empresa.nome": nameFlight, natureza: "Doméstica" }).count();

db.resumoVoos.insertOne(
  {
    empresa: nameFlight,
    totalVoosDomesticos: numFlight,
  },
);
db.resumoVoos.find(
  {
    empresa: nameFlight },
  {
    empresa: 1,
    totalVoosDomesticos: 1,
    _id: 0,
  },
);