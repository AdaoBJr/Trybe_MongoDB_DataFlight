const LATAM = "LATAM AIRLINES BRASIL";

db.resumoVoos.insert({
  empresa: LATAM,
  totalVoosDomesticos: db.voos.find(
    { natureza: "Doméstica", "empresa.nome": LATAM },
    ).count(),
});

db.resumoVoos.find({ empresa: LATAM }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
