var mongoose = require('mongoose');

module.exports = function () {
  var schema = mongoose.Schema({
    produto:{
      type: Object
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