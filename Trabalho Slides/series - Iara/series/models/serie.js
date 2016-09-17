// /models/contato.js
var mongoose = require('mongoose');

module.exports = function () {
  var schema = mongoose.Schema({
    nomeSerie: {
      type: String,
      require: true
    },
    episodio: {
      type: String,
      require: true
    }
    
  });

  return mongoose.model('serie', schema);
};

