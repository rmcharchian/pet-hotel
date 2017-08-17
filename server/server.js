//Ian settin up the server ya'll

//all our vars
var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var routes = require('/server/routes/route')

//public access
app.use(express.static('../public'));

//angular parser
app.use(bodyParser.json());

//route path for future
app.use('/routes', routes);

//can u hear me now?
app.listen(port, function(){
    console.log('Listening on port', port);
    
});