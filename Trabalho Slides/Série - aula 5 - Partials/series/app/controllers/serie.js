module.exports = function (app) {
  var controller = {};
  var Series = app.models.serie;


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


  controller.listaSerieId = function (req, res) {
    var _id = req.params.id;
    Series.findById(_id).exec()
      .then(function (serie) {
        if (!serie) throw new Error('Série não encontrado');
        res.json(serie);
      },
        function (erro) {
          console.log(erro);
          res.status(404).json(erro);
        }
    );
  };

 
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



  return controller;
};
