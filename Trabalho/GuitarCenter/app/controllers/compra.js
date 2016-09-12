module.exports = function (app) {
  var controller = {};
  var Compra = app.models.compra;

  controller.addCompra = function (req, res) {
    var compra = req.body;
    Compra.create(compra,
      function (erro, compra) {
        if (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        res.status(201).json(categoria);
      });
  };

    return controller;
};