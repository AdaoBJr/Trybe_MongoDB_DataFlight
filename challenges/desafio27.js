db.resumoVoos.insertOne({
    empresa: "PASSAREDO",
    totalVoosDomesticos: 4187,
});

db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { totalVoosDomesticos: 1 });
