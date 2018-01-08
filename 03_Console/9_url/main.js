var url = require('url');

var mockUrl = 'https://www.getpostman.com/docs/postman/launching_postman/navigating_postman';
var mockUrlObj = url.parse(mockUrl);

console.log(mockUrlObj);

var formattedUrl = url.format(mockUrlObj);
console.log(formattedUrl);