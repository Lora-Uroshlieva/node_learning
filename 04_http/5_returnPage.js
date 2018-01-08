var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;
    console.log(path);

    path = __dirname +'/pageToReturn'+ path;
    console.log(path);

    fs.readFile(path, 'utf-8', function (err, data) {
        if(err) {
            console.log(err);
            response.writeHead(404, {'Content-type': 'text/plain'});
            response.end('page not found!');
        } else {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(data.toString());
            console.log('data was sent');
            response.end();
        }
    })
});

server.listen(8080, function () {
    console.log('server was starting');
});