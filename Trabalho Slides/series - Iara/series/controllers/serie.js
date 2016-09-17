module.exports = function (app) {
  var controller = {};
  var Series = app.models.serie;

  /**
   * fucao que listas todos os contatos
   */

  

  controller.listaSeries = function (req, res) {
    Series.find().exec()
      .then(
        function (series) {
          res.json(series);
        },
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
    );

  };

  /**
   * funcao que lista o contato pelo id 
   */
  controller.listaSerieId = function (req, res) {
    var _id = req.params.id;
    Series.findById(_id).exec()
      .then(function (serie) {
        if (!serie) throw new Error('Série não encontrada!');
        res.json(serie);
      },
        function (erro) {
          console.log(erro);
          res.status(404).json(erro);
        }
    );
  };

  /**
   * funcao que adciona um contato
   */
  controller.addSerie = function (req, res) {
    var serie = req.body;
    Series.create(serie,
      function (erro, serie) {
        if (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        res.status(201).json(serie);
      });
  };

  controller.deleteSerie = function (req, res) {
    var query = {'_id': req.params.id};
    Series.remove(query, function (erro) {
      if (erro) {
        console.error(erro);
        res.status(500).json(erro);
      } else {
        res.status(204).end();

      }
    });
  };

  controller.updateSerie = function (req, res) {
    var id = req.params.id;
    Series.findByIdAndUpdate(id, req.body,
      function (erro, serie) {
        if (erro) {console.error(erro);
          res.status(500).json(erro);} else {
          res.json(serie);
        }
      });

  };
  

  return controller;
};


