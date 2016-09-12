var mongoose = require('mongoose');

module.exports = function () {
  var schema = mongoose.Schema({
    nome: {
      type: String,
      require: true
    },
    nomeProduto: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    formaPag: {
      type: Object

    }
  });

  return mongoose.model('Compra', schema);
};