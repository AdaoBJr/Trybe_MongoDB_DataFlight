const COMPANY = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: COMPANY,
  totalVoosDomesticos: db.voos.find(
    { natureza: "Doméstica", "empresa.nome": COMPANY },
    ).count(),
});

db.resumoVoos.find(
  { empresa: COMPANY }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
  );