var fs = require('fs');

function FileWork() {
    this.filename = '';

    this.fileReading = function(pathToFile) {
        if (!fs.existsSync(pathToFile)) {
            throw new Error('File does not exists');
        } else {
            fs.readFile(pathToFile, 'utf-8', function (err, data) {
                if(err) {
                    console.log(err);
                } else {
                    console.log('file was successfully read. Data:  ');
                    console.log(data);
                }
            });
        }
    };

    this.fileWriting = function (path, dataToWrite) {
        fs.writeFile(path, dataToWrite, function (err) {
            if(err) {
                throw new Error();
            }
            console.log('File was successfully written.')
        });
    };

    this.fileAppending = function (path, dataToAppend) {
        fs.appendFile(path, dataToAppend, function (err) {
            if(err) {
                throw new Error;
            }
            console.log('Data was successfully appended to file');
        })
    };

}

var app = new FileWork();
app.fileReading(__dirname + '/test.txt');
app.fileWriting(__dirname + '/test.txt', 'Some text');
app.fileAppending(__dirname + '/test.txt', ' Hello!!!');