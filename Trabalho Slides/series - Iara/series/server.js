var http = require('http');
var app = require('./config/express')();
require('./config/database.js' )('mongodb://localhost/series' );
http.createServer(app).listen(app.get('port'),function(){
	console.log('Express server escutando na porta'+app.get('port'));
});

