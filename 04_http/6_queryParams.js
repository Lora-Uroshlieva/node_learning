var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    var query = url.parse(request.url, true).query;
    response.end('GET params: ' + JSON.stringify(query));
}).listen(8080, 'localhost');