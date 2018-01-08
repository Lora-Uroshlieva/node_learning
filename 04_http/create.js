var http = require('http');

var server = http.createServer(function (request, response) {
    console.log('connection established');
    console.log(request.method);
    // response.end('Hello, world!');
    response.end('response was configured', 'utf-8', function () {
        console.log('message was written in browser.')
    });
});

server.listen(8080);
server.on('listening', function () {
    console.log('server running on port 8080')
});

