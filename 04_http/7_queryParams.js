var http = require('http');
var url = require('url');

const server = http.createServer();
var port = 8000;

server.on('request', function (request, response) {
    var method = request.method;
    var url_ = request.url;

    console.log('Method: ', method, ' Url: ', url_);

    var parsedUrl = url.parse(request.url, true);
    console.log(parsedUrl);

    if (parsedUrl.pathname == '/test' && parsedUrl.query.message) {
        response.statusCode = 200;
        response.end(parsedUrl.query.message);
    } else {
        response.statusCode = 404;
        response.end('PAGE NOT FOUND ON SERVER!');
    }
});

server.listen(port);


server.on('listening', function () {
    console.log('Server is running on port: ', port);
});

//request should be like http://localhost:8000/test?message=testinfo