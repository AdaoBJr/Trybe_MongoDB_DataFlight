db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL",
totalVoosDomesticos:
db.voos.find({ "empresa.nome": /LATAM/, natureza: "Doméstica" }).count() });
db.resumoVoos.findOne({ empresa: "LATAM AIRLINES BRASIL" }, { _id: 0 });
