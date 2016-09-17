var http = require('http')
  ,fs = require('fs')
  ,index = fs.readFileSync('index.html')
  ,contato = fs.readFileSync('Contato.html');

   var server = http.createServer(function(req, res){
              res.writeHead(200,{"Content-Type": "text/html"});
              if(req.url == "/"){
              res.write(index);
          }
           else if(req.url == "/user"){
              res.write(contato);
           }
          else{
          	  res.write("<h1>404</h1>");
          }
              res.end();
  });

    server.listen(3000, function(){
       console.log('Servidor rodando em localhost:3000');
    });