const LATAMBR = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
    empresa: LATAMBR,
    totalVoosDomesticos: db.voos.find({
        "empresa.nome": LATAMBR,
        natureza: "Doméstica",
    }).count(),
});

db.resumoVoos.find(
    { empresa: LATAMBR },
    { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
    ).limit(1);
