var fs = require('fs');

fs.exists('text.txt', function () {
    fs.readFile('text.txt', function (err,data) {
        if(err) {
            console.log(err);
            return;
        }
        var obj = JSON.parse(data);
        console.log(obj);
    });
});