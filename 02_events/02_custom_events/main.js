var fileReader = require('./readFile');

var reader = new fileReader();

reader.readDataFromFile('file.js', function (response) {
    console.log(response)
});