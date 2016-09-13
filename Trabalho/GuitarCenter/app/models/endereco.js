var mongoose = require('mongoose');

module.exports = function () {
  var schema = mongoose.Schema({
    rua: {
      type: String,
      require: true
    },
    numero: {
      type: String,
      require: true
    },
    bairro: {
      type: String,
      require: true
    },
    complemento: {
      type: String,
      require: true
    },
    cidade: {
      type: String,
      require: true
    },
    cep: {
      type: String,
      require: true
    },
    estado: {
      type: String,
      require: true
    }
   
  });

  return mongoose.model('Endereco', schema);
};