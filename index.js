var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello World");
});

app.get('/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    response.send(["Hello", first, last].join(" "));
});

app.get('/jedi/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname.slice(0,2);
    var last = request.params.lastname.slice(0,3);
    response.send("Hello " + last + first);
});

app.listen(8080);
