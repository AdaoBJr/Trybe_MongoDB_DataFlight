// quantidade de voos da empresa GOL.
db.voos.find({ "empresa.nome": "GOL" }).count(); // 29993
