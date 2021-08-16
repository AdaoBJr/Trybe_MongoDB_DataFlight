//db.voos.count({ "empresa.nome": "AZUL" }).pretty();
db.voos.find({ "empresa.nome": "AZUL" }).count();
