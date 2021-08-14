// Tive de procurar auxílio com colegas para compreender exatamente o que este desafio estava pedindo. No fim, consegui desevolver

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.find(
    { "empresa.nome": "PASSAREDO",
    natureza: "Doméstica",
  },
).count(),
});

db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });