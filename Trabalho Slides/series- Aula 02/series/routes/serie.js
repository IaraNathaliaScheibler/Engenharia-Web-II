module.exports = function(app){

	var controller = app.controllers.serie;

	app.get('/series', controller.listaSeries);
	app.get('/series/:id', controller.obtemSerie);
	app.get('/series/nome/:nome', controller.obtemNome);
};