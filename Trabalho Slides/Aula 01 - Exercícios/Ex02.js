var http = require('http');

  var server = http.createServer(function(request, response){
              response.writeHead(200,{"Content-Type": "text/plain"});
              response.write("Página acessada com sucesso!");
              response.end();
  });

    server.listen(3000, function(){
       console.log('Executando Servidor HTTP');
    });