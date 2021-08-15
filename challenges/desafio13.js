db.voos.count(
    { "aeroportoDestino.continente": 
    { $not:
    { $in:
    ["EUROPA", "ÁSIA", "OCEANIA"],
    } } },
    );

    db.voos.count(
    { "aeroportoDestino.continente":
    { $not:
    { $in: 
    ["EUROPA", "ÁSIA", "OCEANIA"],
    } } },
    );