var fs = require('fs');

fs.watch('text.txt', function (event, filename) {
    console.log('file %s is %s', filename, event);
});

fs.writeFile('text.txt', 'somedata - my text', function (err) {
    if(err) {
        console.log(err);
    }
    console.log('file was written!');
});