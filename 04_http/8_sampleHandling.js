var http = require('http');

http.createServer(function (request, response) {

    switch (request.method) {
        case 'GET': {
            var responseText = 'GET request to path: ' + request.url;
            console.log(responseText);
            response.end(responseText);
            break;
        }

        case 'POST': {
            var responseText = 'POST request to path: ' + request.url;
            console.log(responseText);
            response.end(responseText);
            break;
        }
    }
}).listen(8000);

//example request: http://localhost:8000/products/122