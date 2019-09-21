var express = require("express");
var path = require('path');
// var bodyParser = require('body-parser')

var app = express();

var PORT = process.env.PORT || 8080;

// app.use(bodyParser.json({ type: 'application/*+json' }))
// app.use(bodyParser.raw({ type: 'application/vnd.api+json' }))
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text({ type: 'text/html' }))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
