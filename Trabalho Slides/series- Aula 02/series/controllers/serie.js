var series = [
  {
  	_id: 1, nome: '1A'
  	
  },
  {
  	_id: 2, nome: '1B'
  	
  },
  {
  	_id: 3, nome: '2A'
  	
  },
  {
  	_id: 4, nome: '3A'
  	
  },
  {
  	_id: 5, nome: '3B'
  	
  }
];

module.exports = function(app){
	var controller = {};
  
	controller.listaSeries = function(req, res){
		res.json(series);
	};

	controller.obtemSerie = function(req, res){
		var idSerie = req.params.id;
		var serie = series.filter(function(serie){
			return serie._id == idSerie;
		})[0];
		serie ?
		res.json(serie) :
		res.status(404).send('Série não encontrada!');

	};

  controller.obtemNome = function(req, res){
    var nome = req.params.nome;
    var serie = series.filter(function(serie){
      return serie.nome == nome;
    })[0];
    serie ?
    res.json(serie) :
    res.status(404).send('Nome não encontrado!');

  };
	return controller;
}