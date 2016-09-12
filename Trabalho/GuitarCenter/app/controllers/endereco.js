module.exports = function (app) {
  var controller = {};
  var Endereco = app.models.endereco;

  controller.addEndereco = function (req, res) {
    var compra = req.body;
    Endereco.create(endereco,
      function (erro, endereco) {
        if (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        res.status(201).json(endereco);
      });
  };

    return controller;
};