var event = require('events');
var emitter = new event.EventEmitter();

function FileStream() {
    this.file = '';
}

FileStream.prototype = emitter;
FileStream.prototype._read = function () {
    emitter.emit('read');
};

FileStream.prototype._write = function () {
    emitter.emit('write');
};
FileStream.prototype.readFile = function () {
    emitter.on('read', function () {
        console.log('file was read');
    });
    this._read();
};
FileStream.prototype.writeFile = function () {
    emitter.on('write', function () {
        console.log('file was written');
    });
    this._write();
};



var f = new FileStream();
f.writeFile();
f.readFile();