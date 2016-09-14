module.exports = function (app) {
    var controller = app.controllers.compra;

    //organnizacao das rotas
    app.route('/api/compras') 
        .get(controller.listCompras)       
        .post(controller.addCompra);

        app.route('/api/compras/:id')
        .delete(controller.deleteCompra);    
}