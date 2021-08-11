db.voos.find({ $and: [
    { "empresa.nome": { $eq: "PASSAREDO" } },
    { "empresa.natureza": { $eq: "Doméstica" } },
],
}).count();
