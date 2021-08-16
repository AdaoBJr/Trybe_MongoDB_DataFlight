// db.voos.count({ "empresa.nome": "GOL" }).pretty(); -- mesma situaçao do req3, verificar o uso corredo do count
db.voos.find({ "empresa.nome": "GOL" }).count();
