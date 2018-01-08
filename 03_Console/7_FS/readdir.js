var fs = require('fs');

fs.readdir(__dirname +'/..', function (err, filenames) {
    console.log(filenames);
});