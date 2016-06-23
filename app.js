'use stict';

var express = require('express');

var app = express();

app.get('/', function(req, res ){l
  response.send("I love Trains");
});
app.listen(3000, function() {
  console.log("The frontend server is running on port 3000")
});
