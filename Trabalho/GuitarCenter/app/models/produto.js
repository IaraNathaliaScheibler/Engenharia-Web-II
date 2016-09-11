var mongoose = require('mongoose');

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
      type: String

    }
  });

  return mongoose.model('Produto', schema);
};

