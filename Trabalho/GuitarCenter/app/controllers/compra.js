module.exports = function (app) {
  var controller = {};
  var Compra = app.models.compra;

  controller.listCompras = function (req, res) {
    Compra.find().exec()
      .then(
        function (compra) {
          res.json(compra);
        },
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
    );

  };

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

  controller.deleteCompra = function (req, res) {
        var query = { '_id': req.params.id };
        Compra.remove(query, function (erro) {
            if (erro) {
                console.error(erro);
                res.status(500).json(erro);
            } else {
                res.status(204).end();

            }
        });
    };

    return controller;
};