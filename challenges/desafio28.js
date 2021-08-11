const empresaName = "LATAM AIRLINES BRASIL";

db.resumoVoos.insert({
  empresa: empresaName,
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": empresaName,
    natureza: "Doméstica",
  }),
});

db.resumoVoos.find(
  { empresa: empresaName },
  { _id: 0 },
);
