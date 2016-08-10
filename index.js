var express = require('express');

var app = express();
app.use(express.static(__dirname));

app.use('/public', express.static(__dirname + '/public'));
app.use('/bower', express.static(__dirname + '/bower_components'));

app.set('view engine', 'jade');

app.get('*', function(req, res){
    res.render('index');
});

app.listen(3030);
console.log('Server on. Enter http://localhost:3030 on your browser.');
