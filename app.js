var express = require('express');
var path = require('path');
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser');
app.set('port', 3000);

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api',routes)

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log("Listening on "+ port);
});