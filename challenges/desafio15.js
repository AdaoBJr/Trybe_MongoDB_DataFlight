// total de voos com mais de 20 decolagens.
db.voos.find({ decolagens: { $gt: 20 } }).count(); // 55296
