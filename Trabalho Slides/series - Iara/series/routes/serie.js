module.exports = function(app){
	var controller = app.controllers.serie;

	app.route('/series')
	   .get(controller.listaSeries)
	   .post(controller.addSerie);

	app.route('/series/:id')
	   .get(controller.listaSerieId)
	   .delete(controller.deleteSerie)
	   .put(controller.updateSerie);
	
};