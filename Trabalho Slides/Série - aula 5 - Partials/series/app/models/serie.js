var mongoose = require('mongoose');

module.exports = function () {
  var schema = mongoose.Schema({
    nome: {
      type: String,
      require: true
    },
    episodio: {
      type: String,
    }
  });

  return mongoose.model('Serie', schema);
};

