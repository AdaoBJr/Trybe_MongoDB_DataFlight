db.resumoVoos.insertOne({
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: db.voos.find({ $and: [
        { "empresa.nome": { $eq: "PASSAREDO" } },
        { "empresa.natureza": { $eq: "Doméstica" } },
    ],
    }).count(),
});

db.resumoVoos.findOne({ empresa: { $eq: "LATAM AIRLINES BRASIL" } },
{ _id: 0, empresa: 1, totalVoosDomesticos: 1 });
