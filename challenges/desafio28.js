const latam = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne(
    {
        empresa: latam,
        totalVoosDomesticos: db.voos.count({
            "empresa.nome": latam,
            natureza: "Doméstica",
        }),
    },
);

db.resumoVoos.findOne({ empresa: latam }, { _id: 0 });
