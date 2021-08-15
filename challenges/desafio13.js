db.voos.count(
    { "aeroportoDestino.continente": 
    { $not:
    { $in:
    ["EUROPA", "ASIA", "OCEANIA"],
    } } },
    );
