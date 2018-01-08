var http = require('http');
var utils = require('util');

http.createServer(function (request, response) {
    var requestInfo = utils.format('HTTPVersion: %s \nMethod: %s \nStatusCode: %s \nMessage: %s \nURL: %s',
        request.httpVersion,
        request.method,
        request.statusCode,
        request.message,
        request.url);

    console.log(requestInfo);
    console.log('\n\n\n');
    for(var key in request.headers) {
        console.log(key, ': ', request.headers[key]);
    }
    response.end('hello');
}).listen(8080, 'localhost');

