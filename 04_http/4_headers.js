var http = require('http');
http.createServer(function (request, response) {
    console.log(request.rawHeaders);

    response.setHeader('Content-type', 'text/plain');

    var ct = response.getHeader('Content-type');
    console.log(ct);

    response.sendDate = false;

    console.log(response.headersSent);

    response.end('<h1>test page </h1>h1>')
    console.log(response.headersSent);

}).listen(8080);
