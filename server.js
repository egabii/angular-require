var express = require('express');
var app = express();

app.use(express.static('.'));
// app.use(express.static('vendor'));
// app.use(express.static('node_modules/requirejs'));



app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});