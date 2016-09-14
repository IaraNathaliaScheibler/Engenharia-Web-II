var mongoose = require('mongoose')
    categoria= {
    nomeCategoria: {
      type: String,
      require: true
    },
    
  };

module.exports = function () {
  var schema = mongoose.Schema({
    nomeProduto: {
      type: String,
      require: true
    },
    preco: {
      type: String,
      require: true
    },
    categoria: {
      type: categoria
    }
  });

  return mongoose.model('Produto', schema);
};

