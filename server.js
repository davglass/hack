var express = require('express');
var hbs = require('express3-handlebars');

var app = express();

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('index');
});

var port = process.env.PORT || 5000;
app.listen(port);
