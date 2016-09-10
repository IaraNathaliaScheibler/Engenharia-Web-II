module.exports = function (app) {
    var controller = app.controllers.categoria;

    //organnizacao das rotas
    app.route('/api/categorias')
        .get(controller.listaCategorias)
        .post(controller.addCategoria);

    app.route('/api/categorias/:id')
        .get(controller.listaCategoriaId)
        .delete(controller.deleteCategoria)
        .put(controller.updateCategoria);
}