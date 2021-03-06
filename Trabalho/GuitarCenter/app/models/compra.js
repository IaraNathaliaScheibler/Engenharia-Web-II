var mongoose = require('mongoose');

module.exports = function () {
  var schema = mongoose.Schema({
    produto:{
      type: Object
    },
    nome: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    formaPag: {
      type: String
    }
  });

  return mongoose.model('Compra', schema);
};