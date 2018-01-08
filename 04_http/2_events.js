var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("hello, world!");
    response.end();
});

server.listen(8080, function () {
    console.log('server is running on port 8080')
});