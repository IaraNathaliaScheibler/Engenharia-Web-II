module.exports = function (app) {
  var controller = {};
  var Categorias = app.models.categoria;

 
  controller.listaCategorias = function (req, res) {
    Categorias.find().exec()
      .then(
        function (categorias) {
          res.json(categorias);
        },
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
    );

  };

 
  controller.listaCategoriaId = function (req, res) {
    var _id = req.params.id;
    Categorias.findById(_id).exec()
      .then(function (categoria) {
        if (!categoria) throw new Error('Categoria não encontrada');
        res.json(categoria);
      },
        function (erro) {
          console.log(erro);
          res.status(404).json(erro);
        }
    );
  };

 
  controller.addCategoria = function (req, res) {
    var categoria = req.body;
    Categorias.create(categoria,
      function (erro, categoria) {
        if (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        res.status(201).json(categoria);
      });
  };

  controller.deleteCategoria = function (req, res) {
    var query = {'_id': req.params.id};
    Categorias.remove(query, function (erro) {
      if (erro) {
        console.error(erro);
        res.status(500).json(erro);
      } else {
        res.status(204).end();

      }
    });
  };

  controller.updateCategoria = function (req, res) {
    var id = req.params.id;
    Categorias.findByIdAndUpdate(id, req.body,
      function (erro, categoria) {
        if (erro) {console.error(erro);
          res.status(500).json(erro);} else {
          res.json(categoria);
        }
      });

  };

  return controller;
};
