var mongoose = require('mongoose');

module.exports = function () {
  var schema = mongoose.Schema({
    nomeCategoria: {
      type: String,
      require: true
    },
    
  });

  return mongoose.model('Categoria', schema);
};