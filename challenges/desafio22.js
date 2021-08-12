db.voos.find({
  $or: [
    { "empresa.nome": /DELTA AIRLINES/ },
    {
      $and: [
        { "empresa.nome": /AMERICAN AIRLINES/ },
        { "aeroportoOrigem.sigla": /SBGR/ },
        { "aeroportoDestino.sigla": /KJFK/ },
      ],
    },
  ],
},
  { _id: 0, vooId: 1 }).limit(1);